import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { User } from 'src/app/shared/domain/api/user';
import { DataList } from 'src/app/shared/utils/interfaces/data-list';
import { GetUsers, GET_USERS } from '../tokens/get-users';
import { CreateUser, CREATE_USER } from '../tokens/create-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users$: BehaviorSubject<User[]> = new BehaviorSubject([{}] as User[]);

  constructor(
    @Inject(GET_USERS) private httpGetUsers: GetUsers,
    @Inject(CREATE_USER) private httpCreateUsers: CreateUser
  ) {}

  getUsers(): Observable<User[]> {
    return this.httpGetUsers.getUsers().pipe(
      map((dataList: DataList<User>) => dataList.data),
      map((users: User[]) => {
        return users.map((user) => {
          return new User(
            user.firstname,
            user.surname,
            user.email,
            user.password ? user.password : '',
            user.id ? user.id : null,
            user.tenant_id ? user.tenant_id : null
          );
        });
      })
    );
  }

  createUser(user: User): Observable<User> {
    return this.httpCreateUsers.createUser(user);
  }
}
