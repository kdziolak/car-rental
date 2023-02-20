import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/utils/guards/auth.guard';
import { LayoutComponent } from '../../ui/layout/layout/layout.component';
export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../ui/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../../../auth/feature/auth-shell/auth-shell.module').then(
        (m) => m.AuthShellModule
      ),
  },
];
