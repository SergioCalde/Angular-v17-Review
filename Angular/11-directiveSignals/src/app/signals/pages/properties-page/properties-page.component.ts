import { Component, computed, effect, OnDestroy, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent implements OnDestroy {
  
  public counter = signal(10);

  public user = signal<User>(
    {
      id: 1,
      email: 'ana.bluth@email.com',
      first_name: 'Ana',
      last_name: 'Bluth',
      avatar: 'https://picsum.photos/200'
    });
    
    public fullName = computed( () => `${this.user().first_name} ${this.user().last_name}` );
    
    public userChangeEffect = effect( () => {
      
      console.log( `${ this.user().first_name } - ${ this.counter() }` );
      
    } );
    

  ngOnDestroy(): void {
    // this.userChangeEffect.destroy();
  }

  increaseBy( value: number ){
    // this.counter.set( this.counter() + value );
    this.counter.update( current => current + value );
  }

  onFieldUpdate( field: keyof User, value: string){
    
    // Potencialmente inseguro
    // this.user.set({
    //   ...this.user(),
    //   [field]: value
    // });

    this.user.update( current => ({
      ...current,
      [field]: value
    }) );

    // this.user.update( current => {
      
    //   switch( field ){
    //     case 'email':
    //       current.email = value;
    //       break;
    //     case 'first_name':
    //       current.first_name = value;
    //       break;
    //     case 'last_name':
    //       current.last_name = value;
    //       break;
    //     case 'avatar':
    //       current.avatar = value;
    //       break;
    //     case 'id':
    //       current.id = Number( value );
    //       break;
    //   }

    //   return current
    // });
  }

}
