import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from "../../../service/product.service";

@Component({
  selector: 'product-detail',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {

  @Input()
  product: Product;

  constructor(private productsService: ProductService){
    
      }
    
      save(): void {
        this.productsService.update(this.product)
          .subscribe(
            response => {console.log(response)},
            err => { console.log(err)});
      }
    
    }