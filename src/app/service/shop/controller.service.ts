import { CommonService } from './../common.service';
import { ProductService } from './product.service';
import { Product } from 'src/app/models/admin/product.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  activeComponent=1;
  private openproductpanel=false;
  private openupdateproductpanel=false;
  public updateProduct:any;
  public searchvalue:any;
  search = false;

  constructor(private productService:ProductService, private commonService:CommonService, public db: AngularFireDatabase) {
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
    await this.productService.update(product.getproductUUID(),product);
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

  isSearchEnable(){
    return this.search;
  }

  isProductMeetsSearchCriteria(product:any){
    let productdata = new Product();
    Object.assign(productdata,product);
    if(!this.isSearchEnable()) return true;
    if(productdata.getproductName().toLocaleLowerCase().indexOf(this.searchvalue.toLocaleLowerCase())!= -1){
      return true;
    }
    if(productdata.getcategoryId().toLocaleLowerCase().indexOf(this.searchvalue.toLocaleLowerCase())!= -1){
      return true;
    }
    if(productdata.getprice().toLocaleLowerCase().indexOf(this.searchvalue.toLocaleLowerCase())!= -1){
      return true;
    }
    if(productdata.getproductId().toLocaleLowerCase().indexOf(this.searchvalue.toLocaleLowerCase())!= -1){
      return true;
    }

    return false;
  }

  static generateUUID(){
    return '_' + Math.random().toString(36).substr(2, 21);
  }

}
