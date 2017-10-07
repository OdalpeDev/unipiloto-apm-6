import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductModalPage } from '../pages/product-modal/product-modal';
import { ProductDetailPage } from "../pages/product-detail/product-detail";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {SQLite} from "@ionic-native/sqlite";
import { DbServiceProvider } from '../providers/db-service/db-service';
import { ProductServiceProvider } from '../providers/product-service/product-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductModalPage,
    ProductDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductModalPage,
    ProductDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DbServiceProvider,
    ProductServiceProvider
  ]
})
export class AppModule {}
