import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

import { AuthService } from '../../services/auth.service';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  private fb = inject( FormBuilder );
  private authService = inject( AuthService );
  private router = inject( Router );
  private validatorsService = inject( ValidatorsService );

  public myForm: FormGroup = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    name: ['', [ Validators.required ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]],
  },{
    validators: this.validatorsService.isPasswordValid( 'password', 'password2' )
  });


  isFieldValid( field: string ) {
    return this.validatorsService.isValidField( this.myForm, field );
  }

  register() {

    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      Swal.fire({
                  title: "Error!",
                  text: 'There is an error in the form',
                  icon: "error",
                });
      return;
    }

    const { email, name, password, password2 } = this.myForm.value;

    this.authService.register({ email, name, password })
      .subscribe({
        next: () => {
          this.router.navigateByUrl( '/dashboard' );
        },
        error: (err) => {
          console.log({'Register error': err});
          Swal.fire({
            title: "Error!",
            text: err,
            icon: "error",
          });
        }
      });

  }

}
