import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseFormManagement } from './base-form-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BaseFormManagement],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [BaseFormManagement, FormsModule, ReactiveFormsModule],
})
export class BaseFormManagementModule {}
