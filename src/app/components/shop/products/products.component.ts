import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';
import { Product } from './../../../models/admin/product.model';
import { ControllerService } from './../../../service/admin/controller.service';

@Component({
  selector: 'app-shopproducts',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Product[];
  searchproduct: any;

  constructor(public controller:ControllerService) {
    this.products  = [];
    this.controller.getProducts().valueChanges().subscribe((values) => {
      this.products = values;
    });
   }

  ngOnInit(): void {

  }

  searchProduct(){
    if(this.searchproduct != undefined){
      this.controller.searchvalue = this.searchproduct;
      this.controller.search = true;
    }else{
      this.controller.searchvalue = undefined;
      this.controller.search = false;
    }
  }

}
