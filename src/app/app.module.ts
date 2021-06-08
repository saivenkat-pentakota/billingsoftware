import { CommonService } from './service/common.service';
import { ProductService } from './service/admin/product.service';
// shopModules
import { HomeComponent as shophome } from './components/shop/home/home.component';
import { OtpComponent as shopotp } from './components/shop/otp/otp.component';
import { LoginComponent as shoplogin } from './components/shop/login/login.component';
import { AuthService as shopAuthService } from './service/shop/auth.service';
// adminModules
import { HomeComponent as adminhome } from './components/admin/home/home.component';
import { OtpComponent as adminotp } from './components/admin/otp/otp.component';
import { LoginComponent as adminlogin } from './components/admin/login/login.component';
import { AuthService as adminAuthService } from './service/admin/auth.service';
import { ControllerService } from './service/admin/controller.service';
// userModules
import { LoginComponent } from './components/user/login/login.component';
import { OtpComponent } from './components/user/otp/otp.component';
import { HomeComponent } from './components/user/home/home.component';
import { AuthService } from './service/user/auth.service';
// firebaseModules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
// commonModules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ProductsComponent } from './components/admin/products/products.component';
import { NotificationsComponent } from './components/admin/notifications/notifications.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProductComponent } from './components/admin/product/product.component';
import { AddproductComponent } from './components/admin/addproduct/addproduct.component';
import { CirclespinnerComponent } from './loading/circlespinner/circlespinner.component';
import { UpdateproductComponent } from './components/admin/updateproduct/updateproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OtpComponent,
    HomeComponent,
    shoplogin,
    shophome,
    shopotp,
    adminhome,
    adminotp,
    adminlogin,
    ProductsComponent,
    NotificationsComponent,
    ProfileComponent,
    DashboardComponent,
    ProductComponent,
    AddproductComponent,
    CirclespinnerComponent,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.primaryFirebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule
  ],
  providers: [AuthService, shopAuthService, adminAuthService, ControllerService, ProductService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
  }
 }
