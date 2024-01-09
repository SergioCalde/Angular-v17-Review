import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  
  nameLower: string = 'sergio';
  nameUpper: string = 'SERGIO';
  fullname: string = 'SeRgIO CalDeRóN';


  customDate: Date = new Date();

}
