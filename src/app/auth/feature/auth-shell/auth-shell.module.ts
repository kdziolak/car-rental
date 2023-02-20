import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/page/login.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        // pathMatch: 'full',
        // redirectTo: 'login',
        children: [
          {
            path: 'login',
            loadChildren: () =>
              import('../../../auth/feature/login/login.module').then(
                (m) => m.LoginModule
              ),
          },
        ],
      },
    ]),
  ],
  exports: [],
})
export class AuthShellModule {}
