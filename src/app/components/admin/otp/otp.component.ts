import { AuthService } from './../../../service/admin/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  constructor(public router:Router, public  authService:AuthService ) { }
  otp:any;
  ngOnInit(): void {
  }

  openlogin(){
    this.router.navigate(['/admin/login']);
  }

  verify(){
    this.authService.verifyLoginCode(this.otp);
  }

}
