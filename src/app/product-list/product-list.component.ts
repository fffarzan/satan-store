import { Component, OnInit } from '@angular/core';

import { products } from '../products';  // import data.

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  /** creating a properety in the class and inject data in it */
  products = products;

  constructor() { }

  ngOnInit() {
  }

  /** creating a method in the class for `share` event binding */
  share() {
    window.alert('The product has been shared!');
  }

  /** creating the method in the class for the event that passed form child component */
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
