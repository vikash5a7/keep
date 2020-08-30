import { SidenavComponent } from './component/sidenav/sidenav.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './component/auth/forget-password/forget-password.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { LoginComponent } from './component/auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingupComponent } from './component/auth/singup/singup.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'registration', component: SingupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'nav-bar', component: SidenavComponent },

  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
