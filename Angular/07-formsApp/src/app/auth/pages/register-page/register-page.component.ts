import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  public myForm: FormGroup;

  constructor( private fb: FormBuilder,
              private validatorsService: ValidatorsService,
              private emailValidator: EmailValidatorService
  ) {
    this.myForm = this.fb.group({
      email: ['', [ Validators.required, Validators.pattern(this.validatorsService.emailPattern) ], [ this.emailValidator ]], 
      username: ['', [ Validators.required, validatorsService.cantBeStrider ]],
      password: ['', [ Validators.required, Validators.minLength(6) ]],
      confirmPassword: ['', [ Validators.required ]],
    }, {
      validators: [
        this.validatorsService.isFieldOneEqualFieldTwo('password', 'confirmPassword')
      ]
    });
  }

  isValidField(field: string) {
    return this.validatorsService.isValidFielf(this.myForm, field);
  }

  onSubmit(){
    if( this.myForm.invalid ){
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

  }

}
