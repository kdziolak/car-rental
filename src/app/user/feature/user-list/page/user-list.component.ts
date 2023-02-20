import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/shared/domain/api/user';
import { Cols } from 'src/app/shared/ui/table/table.component';
import { UserService } from '../../../data-access/application/user.service';
import { BaseDialog } from '../../../../shared/base/base-dialog/base-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent extends BaseDialog implements OnInit {
  users$: Observable<User[]> = of();
  cols: Cols[] = [
    { field: 'id', header: 'ID' },
    {
      field: 'firstname',
      header: 'Firstname',
    },
    { field: 'surname', header: 'Surname' },
    { field: 'email', header: 'Email' },
  ];
  constructor(private userService: UserService) {
    super();
  }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

  addNewUser(): void {
    this.isDialogOpen = true;
  }
}
