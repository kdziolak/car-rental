import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainViewComponent,
      },
    ]),
  ],
  exports: [MainViewComponent],
})
export class MainViewModule {}
