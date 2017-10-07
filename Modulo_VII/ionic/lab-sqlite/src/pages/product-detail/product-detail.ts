import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {ProductServiceProvider} from "../../providers/product-service/product-service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  public product: {name: string, id: number} = {name: '', id: 0};
  private id: number = null;
  myForm: FormGroup;

  constructor(public viewCtrl: ViewController,
              public navCtrl: NavController, 
              public navParams: NavParams, 
              public formBuilder: FormBuilder,
              private productServiceProvider: ProductServiceProvider) {
                
    this.myForm = this.createForm();

    this.id = parseInt(navParams.get('id'));
    if (this.id) {
      this.productServiceProvider.getProduct(this.id)
        .then(result => {
          console.debug(result);
          this.product = result;
        })
        .catch(err=>console.error("error create product: ", err));
    }
  }

  private createForm() {
    return this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
    });
  }

  public updateForm() {
    console.log('name =' + this.myForm.value.name);
    this.product.name = this.myForm.value.name;
    this.productServiceProvider.updateProduct(this.product)
      .then(result => {
        console.debug(result);
        this.dismiss();
      })
      .catch(err=>console.error("error create product: ", err));
  }
  
  public dismiss() {
    let data = {};
    this.viewCtrl.dismiss(data);
  }

}
