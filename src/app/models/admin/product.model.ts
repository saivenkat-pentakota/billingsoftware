import { ControllerService } from 'src/app/service/admin/controller.service';

export class Product {
  private productUUID = ControllerService.generateUUID();
  private productId: string;
  private productName: string;
  private description: string;
  private categoryId: string;
  private price: string;
  private imageurl: string;
  private imagename: string;

  constructor() {
    this.productName = "";
    this.productId = "";
    this.description = "";
    this.categoryId = "";
    this.price = "";
    this.imageurl = "";
    this.imagename = "";

  }
  //setters
  setproductId(productId: any) {
    this.productId = productId;
  }

  setproductName(productName: any) {
    this.productName = productName;
  }

  setdescription(description: any) {
    this.description = description;
  }

  setcategoryId(categoryId: any) {
    this.categoryId = categoryId;
  }

  setprice(price: any) {
    this.price = price;
  }

  setimageurl(imageurl: any) {
    this.imageurl = imageurl;
  }

  setimagename(imagename: any) {
    this.imagename = imagename;
  }
  //getters
  getproductUUID() {
    return this.productUUID;
  }

  getproductId() {
    return this.productId;
  }

  getproductName() {
    return this.productName;
  }

  getdescription() {
    return this.description;
  }

  getcategoryId() {
    return this.categoryId;
  }

  getprice() {
    return this.price;
  }

  getimageurl() {
    return this.imageurl;
  }

  getimagename() {
    return this.imagename;
  }

}
