import {InMemoryDbService} from "angular2-in-memory-web-api";
import {Customer} from "../models/customer";
import {LineItem} from "../models/line-item";
import {Product} from "../models/product";
import {SalesInvoice} from "../models/sales-invoice";

import {CUSTOMERS} from "../mocks/customer-mock";
import {LINE_ITEMS} from "../mocks/line-item-mock";
import {PRODUCTS} from "../mocks/product-mock";
import {SALES_INVOICES} from "../mocks/sales-invoice-mock";


export class InMemoryObjectsBDService implements InMemoryDbService {
  createDb() {
     let customers: Array<Customer> = CUSTOMERS;
     let line_items: Array<LineItem> = LINE_ITEMS;
     let products: Array<Product> = PRODUCTS;
     let sales_invoices: Array<SalesInvoice> = SALES_INVOICES;

return {customers, line_items, products, sales_invoices};

  }
}