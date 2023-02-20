import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './page/user-list.component';
import { RouterModule } from '@angular/router';
import { TableModule } from '../../../shared/ui/table/table.module';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SharedModule } from 'primeng/api';
import { DialogModule } from '../../../shared/ui/dialog/dialog.module';
import { BaseDialogModule } from 'src/app/shared/base/base-dialog/base-dialog.module';
import { UserManagementModule } from '../user-management/user-management.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    SharedModule,
    BaseDialogModule,
    DialogModule,
    UserManagementModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserListComponent,
      },
    ]),
  ],
  exports: [UserListComponent],
})
export class UserListModule {}
