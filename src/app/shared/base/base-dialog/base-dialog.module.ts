import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDialog } from './base-dialog.component';

@NgModule({
  declarations: [BaseDialog],
  imports: [CommonModule],
  exports: [BaseDialog],
})
export class BaseDialogModule {}
