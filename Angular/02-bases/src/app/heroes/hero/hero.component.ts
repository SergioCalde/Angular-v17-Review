import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }
 
  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }


  changeHero(): void {

    this.name = this.name === 'Ironman' ? 'Spider-man' : 'Ironman';
    
  }

  changeAge(): void {
    this.age = this.age === 45 ? 17 : 45;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;
  }

}
