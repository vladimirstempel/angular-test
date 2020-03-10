import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';


const routes: Routes = [{
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth'
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
        canActivateChild: [GuestGuard]
      },
      {
        path: 'blocks',
        loadChildren: () => import('./blocks/blocks.module').then(m => m.BlocksModule),
        canActivateChild: [AuthGuard]
      },
      {
        path: 'table',
        loadChildren: () => import('./table/table.module').then(m => m.TableModule),
        canActivateChild: [AuthGuard]
      },
      {
        path: 'details',
        loadChildren: () => import('./details/details.module').then(m => m.DetailsModule),
        canActivateChild: [AuthGuard]
      }
    ]
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
