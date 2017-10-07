import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private device: Device) {

    console.log('Device UUID is: ' + this.device.uuid);
    console.log('Device Model is: ' + this.device.model);
    console.log('Device platform is: ' + this.device.platform);
    console.log('Device serial is: ' + this.device.serial);
    console.log('Device version is: ' + this.device.version);

  }

}
