import { AuthService } from './../../../service/user/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase'
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  phoneNumber:any;
  constructor(public router:Router,public authService:AuthService) {
    firebase.initializeApp(environment.primaryFirebaseConfig);
  }

  ngOnInit(): void {

  }

  continue(){
    this.authService.initializeWindowRef()
    this.authService.sendOtp(this.phoneNumber);
  }

}
