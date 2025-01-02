import { Component, signal, computed } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

  public counter = signal(0);
  public squareCounter = computed( () => this.counter() ** 2 );


  increaseBy( value: number ){

    // this.counter.set( this.counter() + value );
    this.counter.update( current => current + value );
  }



}

