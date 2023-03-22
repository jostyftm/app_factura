import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: IProduct[] = [
    {
      'id': 1,
      'name': 'producto 1',
      'price': 13000
    },
    {
      'id': 2,
      'name': 'producto 2',
      'price': 23500
    },
    {
      'id': 3,
      'name': 'producto 3',
      'price': 54100
    },
    {
      'id': 4,
      'name': 'producto 4',
      'price': 7500
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
