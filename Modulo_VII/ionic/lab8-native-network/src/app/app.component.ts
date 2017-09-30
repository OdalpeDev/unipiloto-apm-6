import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';


import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private network: Network,private toast: AlertController) {
    platform.ready().then(() => {

      // watch network for a disconnect
      let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        this.presentToast('network was disconnected :-(');
      });

      // stop disconnect watch
      disconnectSubscription.unsubscribe();


      // watch network for a connection
      let connectSubscription = this.network.onConnect().subscribe(() => {
        this.presentToast('network connected!');
        // We just got a connection but we need to wait briefly
        // before we determine the connection type. Might need to wait.
        // prior to doing any api requests as well.
        setTimeout(() => {
          if (this.network.type === 'wifi') {
            this.presentToast('we got a wifi connection, woohoo!');
          }
        }, 3000);
      });

      // stop connect watch
      connectSubscription.unsubscribe();


      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  presentToast(mensaje: string) {
    let alert = this.toast.create({
      title: 'New Friend!',
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }
}
