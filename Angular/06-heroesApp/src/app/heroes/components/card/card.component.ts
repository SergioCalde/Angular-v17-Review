import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroe.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent implements OnInit {

  @Input() 
  hero!: Hero;

  constructor() { }

  ngOnInit(): void {
    if( !this.hero ){
      throw new Error('Hero is required');
    }
  }
}
