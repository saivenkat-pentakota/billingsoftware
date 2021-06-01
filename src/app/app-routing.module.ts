import { HomeComponent } from './components/user/home/home.component';
import { HomeComponent as shopHomeComponent } from './components/shop/home/home.component';
import { HomeComponent as adminHomeComponent } from './components/admin/home/home.component';
import { OtpComponent } from './components/user/otp/otp.component';
import { OtpComponent as  shopOtpComponent} from './components/shop/otp/otp.component';
import { OtpComponent as  adminOtpComponent} from './components/admin/otp/otp.component';
import { LoginComponent } from './components/user/login/login.component';
import { LoginComponent as shopLoginComponent} from './components/shop/login/login.component';
import { LoginComponent as adminLoginComponent} from './components/admin/login/login.component';
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
  },
  {path:'shop',
  children:[
    {path:'login',component:shopLoginComponent},
    {path:'otp',component:shopOtpComponent},
    {path:'home',component:shopHomeComponent}
  ]
  },
  {path:'admin',
  children:[
    {path:'login',component:adminLoginComponent},
    {path:'otp',component:adminOtpComponent},
    {path:'home',component:adminHomeComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
