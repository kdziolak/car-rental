import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface DeleteUser {
  deleteUser(id: string): Observable<any>;
}

export const DELETE_USER = new InjectionToken<DeleteUser>('DELETE_USER');
