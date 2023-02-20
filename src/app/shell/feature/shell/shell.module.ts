import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AuthShellModule } from 'src/app/auth/feature/auth-shell/auth-shell.module';
import { AuthHttpInterceptorProvider } from 'src/app/auth/utils/interceptors/auth.interceptor';
import { ErrorCatchingInterceptorProvider } from 'src/app/shared/utils/interceptors/error-catching.interceptor';
import { CREATE_USER } from 'src/app/user/data-access/tokens/create-user';
import { HttpUserService } from '../../../user/data-access/architecture/user.service';
import { GET_USERS } from '../../../user/data-access/tokens/get-users';
import { LayoutModule } from '../../ui/layout/layout.module';
import { routes } from './shell-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    AuthShellModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [
    AuthHttpInterceptorProvider,
    ErrorCatchingInterceptorProvider,
    { provide: GET_USERS, useClass: HttpUserService },
    { provide: CREATE_USER, useClass: HttpUserService },
  ],
})
export class ShellModule {}
