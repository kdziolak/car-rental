import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from '../user-list/page/user-list.component';
import { UserListModule } from '../user-list/user-list.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserListModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('../user-list/user-list.module').then((m) => m.UserListModule),
      },
    ]),
  ],
})
export class UserShellModule {}
