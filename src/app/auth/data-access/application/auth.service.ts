import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpAuthService } from '../architecture/auth.service';
import { StorageService } from '../../../shared/utils/services/storage.service';
import { User } from 'src/app/shared/domain/api/user';
import { TokenService } from '../../../shared/utils/services/token.service';
import { isEmptyObject } from '../../../shared/utils/helpers/empty-object';

export const USER_DATA = 'user_data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: BehaviorSubject<User> = new BehaviorSubject<User>({} as User);
  user$: Observable<User> = this.user.asObservable();

  constructor(
    private httpAuth: HttpAuthService,
    private tokenService: TokenService,
    private storageService: StorageService
  ) {
    const userData = storageService.getItem(USER_DATA);
    if (this.isAuthenticated) {
      this.user.next(
        new User(
          userData.firstname,
          userData.surname,
          userData.email,
          userData.password
        )
      );
    }
  }

  get userValue(): User {
    return this.user.value;
  }

  get isAuthenticated(): boolean {
    const userData = this.storageService.getItem(USER_DATA);
    return !!(userData && !isEmptyObject(userData) && this.tokenService.token);
  }

  login(credentials: any): Observable<any> {
    return this.httpAuth.login$(credentials).pipe(
      tap((user) => {
        if (!user) return;
        const { user_data, token } = user;
        this.tokenService.setToken(token);
        this.storageService.setItem(USER_DATA, {
          ...user_data,
          password: credentials.password,
        });

        this.user.next(
          new User(
            user_data.firstname,
            user_data.surname,
            user_data.email,
            credentials.password
          )
        );
      })
    );
  }
}
