import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthgardGuard } from './authgard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',  pathMatch:'full', component:LoginComponent},
  {path:'login',  pathMatch:'full', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent,canActivate: [AuthgardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
