import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  /** get `product` value that passed form template of parent component with `@Input` decorator */
  @Input() product;

  /** send `notify` event emitter to template of parent component with `@Output` decorator */
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}