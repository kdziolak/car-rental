import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableModule as PrimeTableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, PrimeTableModule, ButtonModule, InputTextModule],
  exports: [TableComponent],
})
export class TableModule {}
