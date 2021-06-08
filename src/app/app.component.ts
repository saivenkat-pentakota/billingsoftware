import { CommonService } from './service/common.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'billingsoftware';
  constructor(public commonService:CommonService){

  }
}
