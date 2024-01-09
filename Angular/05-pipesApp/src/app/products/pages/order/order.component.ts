import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  isUpperCase: boolean = false;
  orderBy: keyof Hero | undefined | '' = '';

  heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green
    },
  ]

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof Hero ) {
    this.orderBy = value;
  }

}

