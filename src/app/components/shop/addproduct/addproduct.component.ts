import { Product } from 'src/app/models/admin/product.model';
import { ControllerService } from './../../../service/admin/controller.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";

@Component({
  selector: 'app-shopaddproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  productId:any;
  productName:any;
  productDescription:any;
  categoryId:any;
  price:any;
  product:Product;
  imageurl:any;
  selectedFile: File ;
  fb:any;
  downloadURL: Observable<string> | undefined;


  constructor(public controller:ControllerService, private storage: AngularFireStorage) {
    this.product= new Product();
    this.selectedFile= {} as File;
   }

  ngOnInit(): void {
  }

  createProduct(){
    this.product.setproductId(this.productId);
    this.product.setproductName(this.productName);
    this.product.setdescription(this.productDescription);
    this.product.setcategoryId(this.categoryId);
    this.product.setprice(this.price);
    this.product.setimagename(this.selectedFile.name)
    this.controller.createproduct(this.product);
  }

  async onFileSelected(event:any) {
    this.controller.showSpinner();
    this.selectedFile = event.target.files[0];
    this.product.setimagename(this.selectedFile.name);
    const filePath = `ProductImages/${this.product.getproductUUID()}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`ProductImages/${this.product.getproductUUID()}`, this.selectedFile);
    task
      .snapshotChanges()
      .pipe(
        finalize(async() => {
          this.downloadURL = fileRef.getDownloadURL();
          await this.downloadURL.subscribe(url => {
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
