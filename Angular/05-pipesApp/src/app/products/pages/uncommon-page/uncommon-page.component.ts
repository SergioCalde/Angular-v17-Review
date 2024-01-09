import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  name: string = 'Sergio';

  gender: 'male'|'female' = 'male';

  invitationMap = {
    'male' : 'invitarlo',
    'female' : 'invitarla'
  }

  changeClient(): void { 
    if(this.name === 'Sergio') {
      this.name = 'Nicole'
      this.gender = 'female'
    }else {
      this.name = 'Sergio'
      this.gender = 'male' 
    }
  }

  //i18nPlural
  clients: string[] = ['Maria','Pedro','Fernando','Nicole','Sergio','Cristina','Allan','Alejandro']
  clientsMap = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    '=2' : 'tenemos 2 clientes esperando.',
    'other' : 'tenemos # clientes esperando.',
  }


  deleteClient(){
    this.clients.shift();
  }

  // KeyValue Pipe

  person = {
    name: 'Sergio',
    age: 26,
    address: 'San José, Costa Rica'

  }

  // Async Pipe

  myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value) )
  );

  promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      this.person.name = 'Otro nombre';
    }, 3500);
  })

}
