import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';  // to add mehtods for generating controls

import { CartService } from '../cart.service';  // import service

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;  // store form model

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({  // gather info
      name: '',
      address: ''
    })
   }

  ngOnInit() {
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
