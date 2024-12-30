import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  private fb = inject(FormBuilder);

  public color: string = 'green';

  public myForm = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(6), Validators.email ]],
  });


  // constructor(  ) { }

  changeColor(){
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

}
