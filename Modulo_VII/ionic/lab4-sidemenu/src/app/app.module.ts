import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Page2Page} from "../pages/page2/page2";
import {Page3Page} from "../pages/page3/page3";
import {Page4Page} from "../pages/page4/page4";
import {Page5Page} from "../pages/page5/page5";
import {ModalProfilePage} from "../pages/modal-profile/modal-profile";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page2Page,
    Page3Page,
    Page4Page,
    Page5Page,
    ModalProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page2Page,
    Page3Page,
    Page4Page,
    Page5Page,
    ModalProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
