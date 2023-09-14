import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-local-bank-acc-info',
  templateUrl: './local-bank-acc-info.component.html',
  styleUrls: ['./local-bank-acc-info.component.scss']
})
export class LocalBankAccInfoComponent {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

}
