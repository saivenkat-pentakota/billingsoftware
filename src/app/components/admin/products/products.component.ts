import { AngularFireList } from '@angular/fire/database';
import { Product } from './../../../models/admin/product.model';
import { ControllerService } from './../../../service/admin/controller.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[];

  constructor(public controller:ControllerService) {
    this.products  = [];
    this.controller.getProducts().valueChanges().subscribe((values) => {
      this.products = values;
    });
  }

  ngOnInit(): void {
  }

}
