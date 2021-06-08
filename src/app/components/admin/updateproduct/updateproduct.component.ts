import { Product } from 'src/app/models/admin/product.model';
import { ControllerService } from './../../../service/admin/controller.service';
import { Component, OnInit, } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  productId:any;
  productName:any;
  productDescription:any;
  categoryId:any;
  price:any;
  product:Product;
  imageurl:any;
  productImageUrl:any;
  selectedFile: File ;
  fb:any;
  downloadURL: Observable<string> | undefined;
  showupload = false;

  constructor(public controller:ControllerService, private storage: AngularFireStorage) {
    this.product= new Product();
    this.productId = this.controller.updateProduct.productId;
    this.productName = this.controller.updateProduct.productName;
    this.productDescription = this.controller.updateProduct.description;
    this.categoryId = this.controller.updateProduct.categoryId;
    this.price = this.controller.updateProduct.price;
    this.productImageUrl = this.controller.updateProduct.imageurl;
    this.selectedFile= {} as File;
   }

  ngOnInit(): void {
  }

  updateProduct(){
    this.product.setproductId(this.productId);
    this.product.setproductName(this.productName);
    this.product.setdescription(this.productDescription);
    this.product.setcategoryId(this.categoryId);
    this.product.setprice(this.price);
    this.product.setimagename(this.selectedFile.name)
    this.controller.updateproduct(this.product);
  }

  onFileSelected(event:any) {
    this.controller.showSpinner();
    this.selectedFile = event.target.files[0];
    this.product.setimagename(this.selectedFile.name);
    const filePath = `ProductImages/${this.productId}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`ProductImages/${this.productId}`, this.selectedFile);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            this.product.setimageurl(this.fb);
            this.controller.hideSpinner();
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
        this.controller.hideSpinner();
      });
  }

}
