import { Injectable } from '@angular/core';
import { combineLatest, map, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Country, Region, SmallCountry } from '../interfaces/country.interfaces';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl: string = environment.apiUrl;

  private _regions: Region[] = [Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania];

  constructor( private http: HttpClient ) { }

  get regions(): Region[] {
    //Al hacer el spread, se copia el array, no se hace una referencia. Evitando alterar el array original
    return [...this._regions ];
  }

  getCountriesByRegion(region: Region): Observable<SmallCountry[]> {
    if ( !region ) return of([]);

    const url: string = `${this.baseUrl}/region/${region}?fields=name,cca3,borders`

    return this.http.get<Country[]>(url)
      .pipe(
        map( countries => countries.map( country => ({
              name: country.name.common,
              cca3: country.cca3,
              borders: country.borders ?? []
        }))),
      )
  }

  getCountryByAlphaCode( alphaCode: string ): Observable<SmallCountry> {
    if ( !alphaCode ) return of();

    const url: string = `${this.baseUrl}/alpha/${ alphaCode }?fields=name,cca3,borders`

    return this.http.get<Country>( url )
      .pipe(
        map( country => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? []
        }))
      )
  }

  getCountryBordersByCodes( borders: string[] ): Observable<SmallCountry[]> {
    if( !borders || borders.length === 0 ) return of([]);

    const countriesRequest: Observable<SmallCountry>[] = [];

    borders.forEach( code => {
      const request = this.getCountryByAlphaCode( code );
      countriesRequest.push( request );
    });

    // Return a combined observable
    return combineLatest( countriesRequest );

  }

}
