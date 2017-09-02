import { Component } from '@angular/core';
import {ProductService} from '../service/product.service';
import  {Product} from '../models/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
 	title: string = "los productos del Año";

    selected: Product;

    products: Product[];

    constructor(private productService: ProductService) {
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
}
