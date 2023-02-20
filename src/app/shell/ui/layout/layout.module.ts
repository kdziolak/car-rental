import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from '../sidebar/sidebar.module';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthGuard } from 'src/app/auth/utils/guards/auth.guard';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../ui/main-view/main-view.module').then(
                (m) => m.MainViewModule
              ),
            canActivate: [AuthGuard],
          },
          {
            path: 'user',
            loadChildren: () =>
              import('../../../user/feature/user-shell/user-shell.module').then(
                (m) => m.UserShellModule
              ),
            canActivate: [AuthGuard],
          },
          {
            path: 'car',
            loadChildren: () =>
              import('../../../user/feature/user-shell/user-shell.module').then(
                (m) => m.UserShellModule
              ),
            canActivate: [AuthGuard],
          },
          {
            path: 'customer',
            loadChildren: () =>
              import('../../../user/feature/user-shell/user-shell.module').then(
                (m) => m.UserShellModule
              ),
            canActivate: [AuthGuard],
          },
          {
            path: 'order',
            loadChildren: () =>
              import('../../../user/feature/user-shell/user-shell.module').then(
                (m) => m.UserShellModule
              ),
            canActivate: [AuthGuard],
          },
        ],
      },
    ]),
    MenuModule,
    RouterModule,
    DialogModule,
    SidebarModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
