import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserType } from '../models/user-type.model';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { CustomValidatorService } from 'src/app/core/services/custom-validator.service';
import { autocompleteValidator } from 'src/app/core/validators/autocomplete.validator';
import { mobileNumberValidator } from 'src/app/core/validators/mobile-number.validator';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit, OnChanges {

  form!: FormGroup;

  @Input() userTypes!: UserType[];


  filteredUserTypeList!: Observable<UserType[]>;

  constructor(
    private fb: FormBuilder,
    public readonly customValidatorService: CustomValidatorService
  ) { }


  ngOnInit(): void {

    // this.initForm();

  }

  ngOnChanges(changes: SimpleChanges): void {

    this.initForm();

    if (this.userTypes.length > 0) {
      this.userType.addValidators(autocompleteValidator(this.userTypes))
      this.setUserTypeList()
    }
  }

  setUserTypeList() {
    if (this.userType) {
      this.filteredUserTypeList = this.userType.valueChanges.pipe(
        startWith(''),
        debounceTime(200),
        map(value =>

          this.userTypes?.filter((option: UserType) => option?.value?.toLowerCase().includes(value.toString().toLowerCase())) ?? ''
        ));
    }
  }



  initForm() {
    this.form = this.fb.group({
      fullName: ['', [Validators.required]],
      emailAddress: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      contactNo: ['', [Validators.required, Validators.pattern('[0-9]+'), mobileNumberValidator]],
      gender: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      userType: ['', [Validators.required]],
      division: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      status: ['', [Validators.required]],

    });

  }




  displayAutocompleteValue(e: any): string {
    return e ? e.value : '';
  }



  //

  get fullName() {
    return this.form.controls['fullName'];
  }
  get emailAddress() {
    return this.form.controls['emailAddress'];
  }

  get contactNo() {
    return this.form.controls['contactNo'];
  }

  get gender() {
    return this.form.controls['gender'];
  }

  get designation() {
    return this.form.controls['designation'];
  }

  get userType() {
    return this.form.controls['userType'];
  }

  get division() {
    return this.form.controls['division'];
  }

  get branch() {
    return this.form.controls['branch'];
  }

  get status() {
    return this.form.controls['status'];
  }


}

