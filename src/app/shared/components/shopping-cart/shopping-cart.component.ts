import { Component, OnInit } from '@angular/core';

export interface Products {
  product: string;
  value: number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  products: Products[] = [];

  constructor() { 
    this.products = [
      {product: 'Hydrogen', value: 100.00},
      {product: 'Hydrogen', value: 100.00},
      {product: 'Hydrogen', value: 100.00}
    ];
  }

  ngOnInit() {
  }

}
