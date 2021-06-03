import { ControllerService } from './../../../service/admin/controller.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(public controller:ControllerService) { }

  ngOnInit(): void {
  }

}
