import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';

  private _errors?: ValidationErrors | null | undefined;  

  @Input() set color(value: string) {
    // console.log('Directive Input Color', value);
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }

  constructor( private el: ElementRef<HTMLElement>) { 

    // console.log('Directive Constructor');

    this.htmlElement = el;

  }

  ngOnInit(): void {
    // console.log('Directive OnInit');

    this.setStyle();
  }

  setStyle() {
    if (!this.htmlElement) return;
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if (!this.htmlElement) return;

    if ( !this._errors ) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }

    const errors = Object.keys(this._errors);

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'This field is required';
      return;
    }

    if (errors.includes('minlength')) {
      const min = this._errors['minlength'].requiredLength;
      const actual = this._errors['minlength'].actualLength;

      this.htmlElement.nativeElement.innerText = `Minimum length is ${min} and you have ${actual}`;
      return;
    }

    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'Invalid email';
      return;
    }

  }

} 
