import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { Branch } from '../models/branch.model';
import { autocompleteValidator } from 'src/app/core/validators/autocomplete.validator';


@Component({
  selector: 'app-local-bank-organization-info',
  templateUrl: './local-bank-organization-info.component.html',
  styleUrls: ['./local-bank-organization-info.component.scss']
})
export class LocalBankOrganizationInfoComponent implements OnInit , OnChanges{

  form!: FormGroup;
  @Input() branchList! :Branch[];
  filteredBranchList!: Observable<Branch[]>;


  constructor(
    private fb: FormBuilder
    ) { }


  ngOnInit(): void {

    this.initForm();
    // this.branchList =[
    //   { id:'1' , value: 'Dhaka' },
    //   { id: '2', value: 'Mymensingh' },

    // ]

  }

  ngOnChanges():void{


    this.initForm();


    if (this.branchList.length > 0) {
      this.branchId.addValidators(autocompleteValidator(this.branchList))
      this.setBranchList()
    }


  }


  initForm() {
    this.form = this.fb.group({
      bankName: [''],
      branchId:[''],
      // branchCode:[''],
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

  displayBranch(e: any): string {
    return e ? e.value : '';
  }





  //

  get bankName() {
    return this.form.controls['bankName'];
  }
  get branchId() {
    return this.form.controls['branchId'];
  }
  // get branchCode() {
  //   return this.form.controls['branchCode'];
  // }
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


