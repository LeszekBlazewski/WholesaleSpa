import { FormGroup } from '@angular/forms';

export function dateRangeCheck(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors?.required) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value > matchingControl.value) {
            matchingControl.setErrors({ mustBeLess: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}