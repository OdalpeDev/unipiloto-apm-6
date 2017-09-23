import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {}

  revealActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modificar alguna opción',
      buttons: [
        {
          text: 'Destructivo',
          role: 'destructive',
          handler: () => {
            console.log('Click en Destructive');
          }
        },
        {
          text: 'Alguna una opción',
          handler: () => {
            console.log('Alguna una opción');
          }
        },
        {
          text: 'Alguna otra opción',
          handler: () => {
            console.log('Alguna otra opción');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Click en Cancelar');
          }
        }
      ]
    });

    actionSheet.present();
  }

}