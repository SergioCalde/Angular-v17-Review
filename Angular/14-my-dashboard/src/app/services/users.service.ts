import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '@interfaces/req-response.interface';
import { delay, map, Observable } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private http = inject(HttpClient);

  #state = signal<State>({
    users: [],
    loading: true
  });

  public users = computed( () => this.#state().users );
  public loading = computed( () => this.#state().loading );


  constructor() {

    this.http.get<UsersResponse>('https://reqres.in/api/users')
      .pipe( delay(1500))
      .subscribe( response => {

        this.#state.set({
          loading: false,
          users: response.data,
        });

      })    
  }

  getUserById( id: string ): Observable<User> {
    const url = `https://reqres.in/api/users/${ id }`;
    return this.http.get<UserResponse>(url)
      .pipe( 
        delay(1500),
        map( resp => resp.data )
      )      
  }


}
