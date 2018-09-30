import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../../entities/products.entity';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  @Input() products: Products[];

  constructor() { }

  ngOnInit() {
    console.log(this.products);
  }

}
