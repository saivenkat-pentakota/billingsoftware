import { AuthService } from './../../../service/shop/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopotp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  constructor(public router:Router, public  authService:AuthService ) { }
  otp:any;
  ngOnInit(): void {
  }

  openlogin(){
    this.router.navigate(['/shop/login']);
  }

  verify(){
    this.authService.verifyLoginCode(this.otp);
  }

}
