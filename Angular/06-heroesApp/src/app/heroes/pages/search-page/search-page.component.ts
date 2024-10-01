import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/heroe.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {

  searchInput = new FormControl('');  
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor( private heroesService: HeroesService ) { }

  searchHero() {
    const value: string = this.searchInput.value || '';
    
    if( !value )return;

    this.heroesService.getSuggestions( value )
      .subscribe( heroes => this.heroes = heroes );
  }

  onSelectedOption( event: MatAutocompleteSelectedEvent ): void {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }
    
    const hero: Hero = event.option.value;
    this.searchInput.setValue( hero.superhero );
    this.selectedHero = hero;
    
  }

}
