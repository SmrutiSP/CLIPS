import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

export class ConfirmPasswordValidator {
    static confirmPassword(formGroup:AbstractControl) {
        if(formGroup.get('password')?.value !== formGroup.get('confirm_password')?.value) {
            return {
                confirmPassword:true
            };
        }
        return null;
    }
}