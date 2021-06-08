import { CommonService } from './../common.service';
import { ProductService } from './product.service';
import { Product } from 'src/app/models/admin/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  activeComponent=1;
  private openproductpanel=false;
  private openupdateproductpanel=false;
  public updateProduct:any;
  constructor(private productService:ProductService, private commonService:CommonService) {
    this.updateProduct  =  new Product();
  }

  openProductPanel(){
    this.openproductpanel = true;
  }

  closeProductPanel(){
    this.openproductpanel = false;
  }

  checkProductPanel(){
    return this.openproductpanel;
  }

  openUpdateProductPanel(product:Product){
    this.updateProduct = product;
    this.openupdateproductpanel = true;
  }

  closeUpdateProductPanel(){
    this.updateProduct = new Product();
    this.openupdateproductpanel = false;
  }

  checkUpdateProductPanel(){
    return this.openupdateproductpanel;
  }

  async createproduct(product:Product){
    this.showSpinner();
    await this.productService.create(product);
    this.closeProductPanel();
    this.hideSpinner();
  }

  async updateproduct(product:Product){
    this.showSpinner();
    await this.productService.update(product.getproductId(),product);
    this.closeUpdateProductPanel();
    this.hideSpinner();
  }

  deleteproduct(productId:any){
    return this.productService.delete(productId);

  }

  getProducts(){
   return this.productService.getAll();
  }

  showSpinner(){
    this.commonService.spinner = true;
  }

  hideSpinner(){
    this.commonService.spinner = false;
  }

}
