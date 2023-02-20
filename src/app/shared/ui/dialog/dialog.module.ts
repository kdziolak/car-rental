import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogModule as PrimeDialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, PrimeDialogModule, ConfirmDialogModule],
  exports: [DialogComponent],
  providers: [ConfirmationService],
})
export class DialogModule {}
