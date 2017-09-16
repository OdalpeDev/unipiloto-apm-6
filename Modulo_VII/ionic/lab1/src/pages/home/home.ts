import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Product } from "../../models/Product";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  title: string = "los productos del Año";

  selected: Product;

  products: Product[] = PRODUCTS;

  onSelect(product: Product) {
    this.selected = product;
  }
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Samsung galaxy 8",
    description: "telefono que explota",
    type: "smartphone",
    price: 1500000,
    quantity: 20
  },
  {
    id: 2,
    name: "Samsung galaxy 10",
    description: "telefono no explota",
    type: "smartphone",
    price: 2430000,
    quantity: 354
  },
  {
    id: 3,
    name: "Samsung galaxy 20",
    description: "no existe",
    type: "smartphone",
    price: 43553000,
    quantity: 2435
  }
];