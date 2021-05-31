import { HomeComponent } from './components/user/home/home.component';
import { OtpComponent } from './components/user/otp/otp.component';
import { LoginComponent } from './components/user/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/user/login', pathMatch: 'full'},
  {path:'user',
  children:[
    {path:'login',component:LoginComponent},
    {path:'otp',component:OtpComponent},
    {path:'home',component:HomeComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
