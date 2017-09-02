import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import {ProductsService} from "./service/products.service";
import { HomeComponent } from './pages/home/home.component';
import {AppRoutingModule} from "./app.routing";
import {APP_BASE_HREF} from "@angular/common";
import { StudentComponent } from './pages/student/student.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
import {StudentService} from "./service/student.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    HomeComponent,
    StudentComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ProductsService,
    {
      provide: APP_BASE_HREF, useValue : '/'
    },
     StudentService,
    {
      provide: APP_BASE_HREF, useValue : '/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
