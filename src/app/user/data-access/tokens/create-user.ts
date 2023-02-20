import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/domain/api/user';

export interface CreateUser {
  createUser(user: User): Observable<User>;
}

export const CREATE_USER = new InjectionToken<CreateUser>('CREATE_USER');
