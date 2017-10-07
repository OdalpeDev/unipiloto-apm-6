import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { ProductServiceProvider } from "../../providers/product-service/product-service";
import { ProductModalPage } from "../product-modal/product-modal";
import { ProductDetailPage } from "../product-detail/product-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public productService: ProductServiceProvider) {
  }

  //this.navCtrl.push(ProductDetailPage, { id: item.id });
  public itemSelected(item: any) {
    let infoProductModal = this.modalCtrl.create(ProductDetailPage, {id: item.id});
    infoProductModal.onDidDismiss(data => {
      console.log(data);
    });
    infoProductModal.present();
  }


  public addProductModal() {
    let addProductModal = this.modalCtrl.create(ProductModalPage, {});
    addProductModal.onDidDismiss(data => {
      console.log(data);
    });
    addProductModal.present();
  }
}
