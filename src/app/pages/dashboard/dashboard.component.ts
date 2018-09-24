import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  products: any[] = [];  

  constructor() {

    this.products = [
      {position: 1, name: 'Hydrogen'},
      {position: 1, name: 'Hydrogen'},
      {position: 1, name: 'Hydrogen'},
      {position: 1, name: 'Hydrogen'},
      {position: 1, name: 'Hydrogen'},
      {position: 1, name: 'Hydrogen'},
      {position: 1, name: 'Hydrogen'},
      {position: 1, name: 'Hydrogen'},
      {position: 1, name: 'Hydrogen'},
      {position: 1, name: 'Hydrogen'},
      {position: 1, name: 'Hydrogen'},
      {position: 1, name: 'Hydrogen'}
    ];

  }
}
