import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  latitud: number;
  longitud: number;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

    this.latitud = 0;
    this.longitud = 0;

  }



  solicitarPosicion(){
    console.log('Consultando posiciòn: ');
    this.geolocation.getCurrentPosition().then((resp) => {
      
      this.latitud = resp.coords.latitude; 
       this.longitud = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }



}
