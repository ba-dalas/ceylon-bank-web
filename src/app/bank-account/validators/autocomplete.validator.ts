import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { DdlType } from "../models/ddl-type.model";


export function autocompleteValidator(options: DdlType[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!options.includes(control.value)) {
      return { invalidValue: true };
    }
    return null;
  };
}
