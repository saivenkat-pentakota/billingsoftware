import { Component, OnInit } from '@angular/core';
import { ControllerService } from './../../../service/admin/controller.service';

@Component({
  selector: 'app-shophome',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public controller:ControllerService,) { }

  ngOnInit(): void {
  }

}
