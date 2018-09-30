import { Component } from '@angular/core';
import { Products } from '../../shared/entities/products.entity';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  products: Products[] = [];  

  constructor() {

    this.products = [
      {id: 1, image: 'img.jpg', product: 'Notebook', price: 2.999, plots: 12},
      {id: 2, image: 'img.jpg', product: 'Iphone', price: 6.999, plots: 11},
      {id: 3, image: 'img.jpg', product: 'Geladeira', price: 1.650, plots: 10},
      {id: 4, image: 'img.jpg', product: 'Monitor', price: 730, plots: 9},
      {id: 5, image: 'img.jpg', product: 'Sapato', price: 67, plots: 8},
      {id: 6, image: 'img.jpg', product: 'Lampada', price: 5, plots: 7},
      {id: 7, image: 'img.jpg', product: 'Mouse', price: 37, plots: 6}
    ];

  }
}
