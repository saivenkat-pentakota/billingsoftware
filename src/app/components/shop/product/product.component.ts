import { Product } from './../../../models/admin/product.model';
import { Component, Input, OnInit } from '@angular/core';
import { ControllerService } from 'src/app/service/admin/controller.service';

@Component({
  selector: 'app-shopproduct',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product:any;
  constructor(public controller:ControllerService) {

   }

  ngOnInit(): void {
  }

}
