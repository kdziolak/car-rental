import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/domain/api/user';
import { CreateUser } from '../tokens/create-user';
import { DeleteUser } from '../tokens/delete-user';
import { EditUser } from '../tokens/edit-user';
import { GetUser } from '../tokens/get-user';
import { GetUsers } from '../tokens/get-users';
import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT } from '../../../shared/environment/environment.token';
import { Environment } from '../../../shared/environment/environment.interface';
import { DataList } from 'src/app/shared/utils/interfaces/data-list';

@Injectable({
  providedIn: 'root',
})
export class HttpUserService
  implements GetUser, GetUsers, CreateUser, DeleteUser, EditUser
{
  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment
  ) {}

  getUser(id: string): Observable<User> {
    throw new Error('Method not implemented.');
  }
  getUsers(): Observable<DataList<User>> {
    return this.http.get<DataList<User>>(`${this.env.apiUrl}/user`);
  }
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.env.apiUrl}/user`, user);
  }
  deleteUser(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  editUser(user: User): Observable<User> {
    throw new Error('Method not implemented.');
  }
}
