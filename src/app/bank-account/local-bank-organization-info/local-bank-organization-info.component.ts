import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { Branch } from '../models/branch.model';
import { autocompleteValidator } from 'src/app/core/validators/autocomplete.validator';
import { BranchCode } from '../models/branch-code.model';


@Component({
  selector: 'app-local-bank-organization-info',
  templateUrl: './local-bank-organization-info.component.html',
  styleUrls: ['./local-bank-organization-info.component.scss']
})
export class LocalBankOrganizationInfoComponent implements OnInit , OnChanges{

  form!: FormGroup;
  @Input() branchList! :Branch[];
  @Input() branchCodeList! :BranchCode[];

  filteredBranchList!: Observable<Branch[]>;
  filteredBranchCodeList!: Observable<BranchCode[]>;




  constructor(
    private fb: FormBuilder
    ) { }


  ngOnInit(): void {

    // this.initForm();

  }

  ngOnChanges():void{


    this.initForm();

    if (this.branchList.length > 0) {
      this.branchId.addValidators(autocompleteValidator(this.branchList))
      this.setBranchList()
    }

    if (this.branchCodeList.length > 0) {
      this.branchCode.addValidators(autocompleteValidator(this.branchCodeList))
      this.setBranchCodeList()
    }


  }


  initForm() {
    this.form = this.fb.group({
      bankName: [''],
      branchId:[''],
      branchCode:[''],
      // country:[''],
      // district:[''],
      // thana:['']
    });

  }

  setBranchList() {
    if (this.branchId) {
      this.filteredBranchList = this.branchId.valueChanges.pipe(
        startWith(''),
        debounceTime(200),
        map(value =>
          this.branchList?.filter((option: Branch) => option?.value?.toLowerCase().includes(value.toString().toLowerCase())) ?? ''
        ));
    }
  }

  setBranchCodeList() {
    if (this.branchCode) {
      this.filteredBranchCodeList = this.branchCode.valueChanges.pipe(
        startWith(''),
        debounceTime(200),
        map(value =>
          this.branchCodeList?.filter((option: BranchCode) => option?.value?.toLowerCase().includes(value.toString().toLowerCase())) ?? ''
        ));
    }
  }

  displayAutocompleteValue(e: any): string {
    return e ? e.value : '';
  }





  //

  get bankName() {
    return this.form.controls['bankName'];
  }
  get branchId() {
    return this.form.controls['branchId'];
  }
  get branchCode() {
    return this.form.controls['branchCode'];
  }
  // get country() {
  //   return this.form.controls['country'];
  // }
  // get district() {
  //   return this.form.controls['district'];
  // }

  // get thana() {
  //   return this.form.controls['thana'];
  // }


}


