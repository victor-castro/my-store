import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../../entities/products.entity';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Products;

  constructor() { }

  ngOnInit() {
    console.log(this.product.product)
  }

}
