import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/domain/api/user';

export interface EditUser {
  editUser(user: User): Observable<User>;
}

export const EDIT_USER = new InjectionToken<EditUser>('EDIT_USER');
