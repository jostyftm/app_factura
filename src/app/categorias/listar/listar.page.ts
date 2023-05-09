import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/ICategory';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  categories: ICategory[] = [
    {
      'id': 1,
      'name': 'categoria 1'
    },
    {
      'id': 2,
      'name': 'categoria 2'
    },
    {
      'id': 3,
      'name': 'categoria 3'
    },
    {
      'id': 4,
      'name': 'categoia 4'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
