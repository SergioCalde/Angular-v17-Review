import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private http = inject( HttpClient );
  private baseUrl = 'https://reqres.in/api/users';

  getUserById( id: number): Observable<User> {

    return this.http.get<SingleUserResponse>( `${this.baseUrl}/${id}` )
      .pipe(
        map( response => response.data ),
        // tap( console.log )
      );
  }


}
