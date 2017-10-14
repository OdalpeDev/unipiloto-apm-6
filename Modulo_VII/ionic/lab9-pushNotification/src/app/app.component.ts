import { Component } from '@angular/core';
import { Nav, Platform, AlertController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    private alertCtrl: AlertController,
    private oneSignal: OneSignal) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.pushNotifications();
    });
  }

  private pushNotifications() {
    this.oneSignal.startInit('1b0b64e8-d5e6-4ab6-bc24-069440fbb107', '840619156121');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    this.oneSignal.handleNotificationOpened()
      .subscribe(jsonData => {
        let alert = this.alertCtrl.create({
          title: jsonData.notification.payload.title,
          subTitle: jsonData.notification.payload.body,
          buttons: ['OK']
        });
        alert.present();
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      });
    this.oneSignal.endInit();
  }

}

