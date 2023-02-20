import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { BaseFormManagementModule } from '../../../shared/base/base-form-management/base-form-management.module';

@NgModule({
  declarations: [UserManagementComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    BaseFormManagementModule,
  ],
  exports: [UserManagementComponent],
})
export class UserManagementModule {}
