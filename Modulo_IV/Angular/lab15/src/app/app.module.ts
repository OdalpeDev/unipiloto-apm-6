import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from "./app.routing";
import {APP_BASE_HREF} from "@angular/common";
import { FormsModule } from '@angular/forms';

import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import { InMemoryProductService } from './mock/in-memory-product.service';
import {InMemoryTeacherService} from "./mock/in-memory-teacher.service";

import { ProductService } from './service/product.service';
import {TeacherService} from "./service/teacher.service";

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ProductComponent } from './product/product.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';
import { DetilTeacherComponent } from './detil-teacher/detil-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ProductComponent,
    TeacherComponent,
    HomeComponent,
    DetilTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryProductService)
  ],
  providers: [ProductService, TeacherService, InMemoryWebApiModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
