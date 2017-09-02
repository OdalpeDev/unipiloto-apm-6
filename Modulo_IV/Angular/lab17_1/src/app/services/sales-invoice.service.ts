import { Injectable } from '@angular/core';
import { SalesInvoice } from "../models/sales-invoice";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SalesInvoiceService {

  private sales_invoicesURI = 'http://localhost:3000/api/sales_invoices';
  constructor(private http: Http) { }

  getSalesInvoices(): Promise<SalesInvoice[]> {
    return this.http.get(this.sales_invoicesURI)
      .toPromise()
      .then(respose => respose.json().data as SalesInvoice[])
      .catch(this.handleError);
  }

  getSalesInvoicesCustomerDetail(id: number): Promise<SalesInvoice[]> {
    return this.getSalesInvoices()
      .then(salesInvoices => {
        return salesInvoices.filter(obj => {
          if (obj.customer.id === id) {
            return true;
          }
        });
      });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);

  }

}
