import { AuthService } from './service/user/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { OtpComponent } from './components/user/otp/otp.component';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { HomeComponent } from './components/user/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OtpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
