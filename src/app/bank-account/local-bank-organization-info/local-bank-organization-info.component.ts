import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-local-bank-organization-info',
  templateUrl: './local-bank-organization-info.component.html',
  styleUrls: ['./local-bank-organization-info.component.scss']
})
export class LocalBankOrganizationInfoComponent implements OnInit , OnChanges{

  form!: FormGroup;
  @Input() branchList! : any


  constructor(
    private fb: FormBuilder
    ) { }


  ngOnInit(): void {
    this.branchList =[
      { id: 1, name: 'Dhaka' },
      { id: 2, name: 'Mymensingh' },

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

}
