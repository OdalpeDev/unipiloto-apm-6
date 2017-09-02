import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from "@angular/common";
import {AppRoutingModule} from "./app.routing";
import {FormsModule} from "@angular/forms";

import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import { InMemoryObjectsBDService } from './mocks/in-memory-BD.service';

import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { SalesInvoiceComponent } from './pages/sales-invoice/sales-invoice.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SalesInvoiceDetailComponent } from './pages/sales-invoice-detail/sales-invoice-detail.component';
import {ProductsService} from "./services/products.service";
import {CustomersService} from "./services/customers.service";
import {SalesInvoiceService} from "./services/sales-invoice.service";


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    SalesInvoiceComponent,
    HomeComponent,
    ProductDetailComponent,
    SalesInvoiceDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryObjectsBDService)
  ],
  providers: [
    {
      provide: APP_BASE_HREF, useValue : '/'
    },
    CustomersService,
    ProductsService,
    SalesInvoiceService,
    InMemoryWebApiModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
