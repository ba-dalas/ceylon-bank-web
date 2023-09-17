import { AbstractControl, FormArray, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export const mobileNumberValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  // console.log(control)

  if (control.value?.length == 0) return null;

  if(control.value?.length < 11) return { invalidMobileNumber: { message: `Mobile Number must be 11 characters. But it is only has ${control.value?.length} characters.` } };
  if(!control.value?.startsWith('01')) return { invalidMobileNumber: { message: `Invalid Mobile Number. Must start with 01` } };

  return null;
};
