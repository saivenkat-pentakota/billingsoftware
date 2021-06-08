import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Product } from 'src/app/models/admin/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dbpath = '/products';
  products: AngularFireList<Product>;
  constructor(public db: AngularFireDatabase) {
    this.products = db.list(this.dbpath);
  }

  getAll():AngularFireList<Product> {
    return this.products;
  }

  create(product: Product): any {
    if(product.getproductId()==undefined) return;
    return this.update(product.getproductId(),product);
  }

  update(key: string, value: any): Promise<void> {
    return this.products.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.products.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.products.remove();
  }
}
