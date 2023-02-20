import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/domain/api/user';
import { DataList } from 'src/app/shared/utils/interfaces/data-list';

export interface GetUsers {
  getUsers(): Observable<DataList<User>>;
}

export const GET_USERS = new InjectionToken<GetUsers>('GET_USERS');
