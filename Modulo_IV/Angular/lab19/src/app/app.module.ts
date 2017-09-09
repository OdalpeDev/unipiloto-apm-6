import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";
import {APP_BASE_HREF} from "@angular/common";
import {AppRoutingModule} from "./app.routing";

import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import { InMemoryObjectService } from './mock/in-memory-object.service';
import { AppComponent } from './app.component';
import { ProductService } from './service/product.service';
import { StudentService } from './service/student.service';

import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { StudentComponent } from './pages/student/student.component';
import { DetailProductComponent } from './pages/details/detail-product/detail-product.component';
import { DetailStudentComponent } from './pages/details/detail-student/detail-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    StudentComponent,
    DetailProductComponent,
    DetailStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryObjectService)
  ],
  providers: [ProductService, StudentService, InMemoryObjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
