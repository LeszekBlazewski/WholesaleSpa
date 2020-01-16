import { AbstractControl, ValidatorFn } from '@angular/forms';

export function ValidateProductAmount(productQuantity: number): ValidatorFn {

    return (control: AbstractControl): { [key: string]: boolean } | null => {

        if (control.value == 0)
            return { notAvailableAmount: true }

        if (control.value > productQuantity) {
            return { validGreaterAmount: true };
        }
        if (control.value <= 0) {
            return { validLessAmount: true };
        }

        return null;
    };

}