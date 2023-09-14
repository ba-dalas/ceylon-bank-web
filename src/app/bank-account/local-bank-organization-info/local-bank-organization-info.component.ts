import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, debounceTime, startWith } from 'rxjs';
import { Branch } from '../models/branch.model';

@Component({
  selector: 'app-local-bank-organization-info',
  templateUrl: './local-bank-organization-info.component.html',
  styleUrls: ['./local-bank-organization-info.component.scss']
})
export class LocalBankOrganizationInfoComponent implements OnInit , OnChanges{

  form!: FormGroup;
  @Input() branchList! :Branch[];
  filteredBranchList!: Observable<[]>;


  constructor(
    private fb: FormBuilder
    ) { }


  ngOnInit(): void {
    this.branchList =[
      { id:'1' , value: 'Dhaka' },
      { id: '2', value: 'Mymensingh' },

    ]
    this.initForm();
  }

  ngOnChanges():void{


  }


  initForm() {
    this.form = this.fb.group({
      bankName: [''],
      branchId:[''],
      branchCode:[''],
      country:[''],
      district:[''],
      thana:['']
    });

  }

  displayBranch(e: any): string {
    return e ? e.value : '';
  }





  //

  get branchId() {
    return this.form.get('branchId');
  }

}
