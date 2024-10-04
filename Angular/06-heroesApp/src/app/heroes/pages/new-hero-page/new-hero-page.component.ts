import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-new-hero-page',
  templateUrl: './new-hero-page.component.html',
  styles: ``
})
export class NewHeroPageComponent {

  heroForm = new FormGroup({
    id:               new FormControl(''),
    superhero:        new FormControl('', { nonNullable: true, validators: [ Validators.required ] } ),
    publisher:        new FormControl<Publisher>( Publisher.DCComics ),
    alter_ego:        new FormControl(''),
    first_appearance: new FormControl(''),
    characters:       new FormControl(''),
    alt_img:          new FormControl(''),
  });

  publishers = [
    { id: 'DC Comics', viewValue: 'DC - Comics' },
    { id: 'Marvel Comics', viewValue: 'Marvel - Comics' },
  ]

  constructor( private heroesService: HeroesService ) { }

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero
  }

  onSubmit(): void {

    if( !this.heroForm.valid ) return;
    
    if ( this.currentHero.id ) {
      this.heroesService.updateHero( this.currentHero )
        .subscribe( hero => {
          //TODO: Mostrar snackbar
        });

        return;
    }

    this.heroesService.addHero( this.currentHero )
      .subscribe( hero => {
        //TODO: Mostrar snackbar, y navegar a /heroes/edit/:id
      });
    
  }
}
