import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class PhoneNumber{
  country:string = '91';
  phoneNo:string = '';


  get phonenumberWithCountryCode(){
    const num = this.country + this.phoneNo;
    return `+${num}`
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  windowRefr: any;
  phoneNumber = new PhoneNumber()
  verificationCode: string='';
  user: any;
  get windowRef():any{
    return window
  }

  constructor(private router:Router) {

  }

  initializeWindowRef(){
    this.windowRefr = this.windowRef;
    this.windowRef.recaptchaVerifier= new firebase.default.auth.RecaptchaVerifier('recaptcha-container',{
      'size': 'invisible',
      'callback': () => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    });
    this.windowRef.recaptchaVerifier.render()
  }

  sendOtp(phoneno:any){
    this.phoneNumber.phoneNo=phoneno;
    const AppVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phoneNumber.phonenumberWithCountryCode;
    firebase.default.auth().signInWithPhoneNumber(num, AppVerifier).then((result: any)=>{
      this.windowRef.confirmationResult = result;
      this.router.navigate(['/user/otp']);
    })
    .catch( (error: any)=> console.log(error) );
  }
  verifyLoginCode(otp:any){
    this.windowRef.confirmationResult.confirm(otp).then((result: { user: any; }) =>{
      this.user = result.user;
      console.log('success:'+this.user);
      this.router.navigate(['/user/home']);
    })
    .catch((error: any) =>console.log(error, "Incorrect code entered?"));
  }
}
