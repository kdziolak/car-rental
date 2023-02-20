import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/domain/api/user';

export interface GetUser {
  getUser(id: string): Observable<User>;
}

export const GET_USER = new InjectionToken<GetUser>('GET_USER');
