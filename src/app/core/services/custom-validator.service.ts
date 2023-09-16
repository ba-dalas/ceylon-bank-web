import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  public isValidNumber(event: any): boolean {
    // console.log(event.key);
    // console.log(event.keyCode);

    const charCode = event.keyCode;
    if (charCode == 8 || charCode == 46 || (charCode >= 48 && charCode <= 57) || (charCode >= 96 && charCode <= 105)) {
      return true;
    }
    return false;
  }

}
