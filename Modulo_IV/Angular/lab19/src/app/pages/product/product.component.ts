import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router } from "@angular/router";
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title: string = "los productos del Año";

  selected: Product;

  products: Product[];

  constructor(private router: Router, private productService: ProductService) {

  }

  getProducts() {
    this.productService.getProducts().then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product: Product) {
    this.selected = product;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productService.create(name)
      .then(product => {
        this.products.push(product);
        this.selected = null;
      })
      .catch(error => console.error(error));
  }
}

