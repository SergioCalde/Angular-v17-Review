import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public isValidField( form: FormGroup, field: string ): boolean | null {
    return form.controls[field].errors
      && form.controls[field].touched;
  }

  public isPasswordValid( password1: string, password2: string ) {
    
    
    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const password1Value = formGroup.get(password1)?.value;
      const password2Value = formGroup.get(password2)?.value;

      if ( password1Value !== password2Value ) {
        formGroup.get(password2)?.setErrors({ 'passwordsNotMatch': true });
        return { 'passwordsNotMatch': true };
      }

      formGroup.get(password2)?.setErrors(null);
      return null;

    }

  }
}
