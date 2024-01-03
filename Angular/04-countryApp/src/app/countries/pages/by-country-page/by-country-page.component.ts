import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  countries: Country[] = [];

  constructor( private countriesService: CountriesService){}

  searchByCountry( term: string ):void {

    this.countriesService.searchCountry(term)
      .subscribe( countries => {
        this.countries = countries;
      });
  }
}
