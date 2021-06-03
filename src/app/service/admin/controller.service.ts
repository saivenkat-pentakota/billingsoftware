import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  activeComponent=1;
  private openproductpanel=false;
  constructor() { }

  openProductPanel(){
    this.openproductpanel = true;
  }

  closeProductPanel(){
    this.openproductpanel = false;
  }

  checkProductPanel(){
    return this.openproductpanel;
  }

}
