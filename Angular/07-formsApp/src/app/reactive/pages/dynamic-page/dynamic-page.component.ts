import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent {

  public myForm: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.myForm = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(3) ]],
      favoriteGames: this.fb.array([
        ['Elden Ring', Validators.required],
        ['Final Fantasy IX', Validators.required],
      ])
    })
  }

  public newFavorite: FormControl = new FormControl('',[ Validators.required ]);

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors 
      && this.myForm.controls[field].touched;
  }

  isValidFieldInArray( formArray: FormArray, index: number){
    return formArray.controls[index].errors 
      && formArray.controls[index].touched;
  }

  getFieldError(field: string): string | null {
    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};
  
    for (const key of Object.keys(errors)) {
      switch ( key ) {
        case 'required':
          return 'This field is required';
        case 'minlength':
          return `This field must be at least ${ errors['minlength'].requiredLength } characters long`;
        case 'min':
          console.log(errors['min'].min);
          return `The ${field} must be greater than or equal to ${ errors['min'].min }`;
      }
    }
    return null;
  }

  onAddToFavorites(): void {
    if( this.newFavorite.invalid ) return;

    const newGame = this.newFavorite.value;

    // this.favoriteGames.push(new FormControl(newGame, [Validators.required]));

    this.favoriteGames.push(
      this.fb.control(newGame, [Validators.required])
    );

    this.newFavorite.reset();

  }

  onDeleteFavoriteGame(index: number): void {
    this.favoriteGames.removeAt(index);
  }

  onSubmit(){

    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    };

    console.log(this.myForm.value);

    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([]);

    this.myForm.reset();

  }
}
