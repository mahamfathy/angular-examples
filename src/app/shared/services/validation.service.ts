import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  static mustMatch(
    controlName: string,
    matchingControlName: string
  ): ValidatorFn {
    return (FormGroup: AbstractControl): ValidationErrors | null => {
      const control = FormGroup.get(controlName);
      const matchingControl = FormGroup.get(matchingControlName);
      if (!control || !matchingControl) {
        return null;
      } else if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
        return { mustMatch: true };
      } else if (
        matchingControl.errors &&
        !matchingControl.errors['mustMatch']
      ) {
        matchingControl.setErrors(null);
        return null;
      } else {
        matchingControl.setErrors(null);
        return null;
      }
    };
  }
}
