import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {Page2Page} from "../page2/page2";

@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html',
})
export class Page4Page {
  constructor(public loadingCtrl: LoadingController, public nav: NavController) {
    
      }
    
      presentLoadingDefault() {
        let loading = this.loadingCtrl.create({
          content: 'Por favor espere...'
        });
    
        loading.present();
    
        setTimeout(() => {
          loading.dismiss();
        }, 5000);
      }
    
      presentLoadingCustom() {
        let loading = this.loadingCtrl.create({
          spinner: 'circles',
          content:
          '<div class="custom-spinner-container">' +
          '<div class="custom-spinner-box">Cargando por 5 segundos</div>' +
          '</div>',
          duration: 5000
        });
    
        loading.onDidDismiss(() => {
          console.log('Por favor espere...');
        });
    
        loading.present();
      }
    
      presentLoadingText() {
        let loading = this.loadingCtrl.create({
          spinner: 'dots',
          content: 'Por favor espere...'
        });
    
        loading.present();
    
        setTimeout(() => {
          this.nav.push(Page2Page);
        }, 1000);
    
        setTimeout(() => {
          loading.dismiss();
        }, 5000);
      }
    
    }
    