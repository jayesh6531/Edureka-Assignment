import { Directive, Input } from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import Validation from '../validators/matchpassword';
@Directive({
  selector: '[assignmentMatchPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchPasswordDirective, multi: true }]
})
export class MatchPasswordDirective implements Validator {

  @Input('assignmentMatchPassword') matchPassword: string[] = [];
  
  validate(formGroup: FormGroup): ValidationErrors | null {
    return Validation.match(this.matchPassword[0], this.matchPassword[1])(formGroup);
  }

  
  constructor() { }

}
