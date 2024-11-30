import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const defaultFormValue = {
  name: '',
  price: 0,
  inStorage: 0
};

@Component({
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent implements OnInit {

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [], []),
  // });
  myForm!: FormGroup;

  constructor( private fb: FormBuilder ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(3) ]],
      price: [0, [ Validators.required, Validators.min(0) ]],
      inStorage: [0, [Validators.required, Validators.min(0)]],
    });
  }

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors 
      && this.myForm.controls[field].touched;
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

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    };
    console.log(this.myForm.value);

    this.myForm.reset({
      price: 0,
      inStorage: 0
    });

  }

}
