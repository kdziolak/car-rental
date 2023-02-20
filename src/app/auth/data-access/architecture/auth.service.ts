import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENT } from '../../../shared/environment/environment.token';
import { Environment } from '../../../shared/environment/environment.interface';
import { HttpClient } from '@angular/common/http';
import { concatMap, from, mergeMap, Observable, of } from 'rxjs';
import { sha256 } from 'src/app/shared/utils/helpers/sha256';

@Injectable({
  providedIn: 'root',
})
export class HttpAuthService {
  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment
  ) {}

  login$(credentials: any): Observable<any> {
    const path = `${this.env.apiUrl}/user/login`;
    const { login, password } = credentials;
    return this.http.post<any>(path, { login }).pipe(
      concatMap((res) => {
        return res?.nonce
          ? from(sha256(password)).pipe(
              concatMap((shaPassword) => from(sha256(shaPassword + res.nonce)))
            )
          : of(res);
      }),
      mergeMap((res) => {
        return res?.nonce
          ? of(res)
          : this.http.post<any>(path, {
              login: credentials.login,
              password: res,
            });
      })
    );
  }
}
