import { Component } from '@angular/core';

@Component({
  selector: 'app-new-hero-page',
  templateUrl: './new-hero-page.component.html',
  styles: ``
})
export class NewHeroPageComponent {

  publishers = [
    { id: 'DC Comics', viewValue: 'DC - Comics' },
    { id: 'Marvel Comics', viewValue: 'Marvel - Comics' },
  ]
}
