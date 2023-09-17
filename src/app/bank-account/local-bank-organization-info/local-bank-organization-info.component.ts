import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { Branch } from '../models/branch.model';
import { autocompleteValidator } from 'src/app/core/validators/autocomplete.validator';
import { BranchCode } from '../models/branch-code.model';
import { Country } from '../models/country.model';
import { District } from '../models/district.model';
import { Thana } from '../models/thana.model';


@Component({
  selector: 'app-local-bank-organization-info',
  templateUrl: './local-bank-organization-info.component.html',
  styleUrls: ['./local-bank-organization-info.component.scss']
})
export class LocalBankOrganizationInfoComponent implements OnInit , OnChanges{

  form!: FormGroup;
  @Input() branchList! :Branch[];
  @Input() branchCodeList! :BranchCode[];
  @Input() countryList! :Country[];
  @Input() districtList! :District[];
  @Input() thanaList! :Thana[];


  filteredBranchList!: Observable<Branch[]>;
  filteredBranchCodeList!: Observable<BranchCode[]>;
  filteredCountryList!: Observable<Country[]>;
  filteredDistrictList!: Observable<District[]>;
  filteredThanaList!: Observable<Thana[]>;
  filteredOfcDistrictList!: Observable<District[]>;
  filteredOfcThanaList!: Observable<Thana[]>;




  constructor(
    private fb: FormBuilder
    ) { }


  ngOnInit(): void {

    // this.initForm();

  }

  ngOnChanges():void{


    this.initForm();

    if (this.branchList?.length > 0) {
      this.branchId.addValidators(autocompleteValidator(this.branchList))
      this.setBranchList()
    }

    if (this.branchCodeList?.length > 0) {
      this.branchCode.addValidators(autocompleteValidator(this.branchCodeList))
      this.setBranchCodeList()
    }

    if (this.countryList?.length > 0) {
      this.country.addValidators(autocompleteValidator(this.countryList))
      this.setCountryList()
    }

    if (this.districtList?.length > 0) {
      this.district.addValidators(autocompleteValidator(this.districtList))
      this.setDistrictList()
    }

    if (this.thanaList?.length > 0) {
      this.thana.addValidators(autocompleteValidator(this.thanaList))
      this.setThanaList()
    }

    if (this.districtList?.length > 0) {
      this.OfcDistrict.addValidators(autocompleteValidator(this.districtList))
      this.setOfcDistrictList()
    }

    if (this.thanaList?.length > 0) {
      this.ofcThana.addValidators(autocompleteValidator(this.thanaList))
      this.setOfcThanaList()
    }

  }


  initForm() {
    this.form = this.fb.group({
      bankName: [''],
      branchId:[''],
      branchCode:[''],
      country:[''],
      district:[''],
      thana:[''],
      incorporationNumber:[''],
      incorporationDate:[''],
      registrationAuthority:[''],
      registeredAddress:[''],
      tradeLicenseNumber:[''],
      dateOfTradeLicense:[''],
      expiredDate:[''],
      issuingAuthority:[''],
      tinNumber:[''],
      OfcDistrict:[''],
      ofcThana:[''],
      ofcAddress:[''],
      ofcEmailAddress:[''],
      ofcContactNo:[''],
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

  setCountryList() {
    if (this.country) {
      this.filteredCountryList = this.country.valueChanges.pipe(
        startWith(''),
        debounceTime(200),
        map(value =>
          this.countryList?.filter((option: Country) => option?.value?.toLowerCase().includes(value.toString().toLowerCase())) ?? ''
        ));
    }
  }

  setDistrictList() {
    if (this.district) {
      this.filteredDistrictList = this.district.valueChanges.pipe(
        startWith(''),
        debounceTime(200),
        map(value =>
          this.districtList?.filter((option: District) => option?.value?.toLowerCase().includes(value.toString().toLowerCase())) ?? ''
        ));
    }
  }

  setThanaList() {
    if (this.thana) {
      this.filteredThanaList = this.thana.valueChanges.pipe(
        startWith(''),
        debounceTime(200),
        map(value =>
          this.thanaList?.filter((option: Thana) => option?.value?.toLowerCase().includes(value.toString().toLowerCase())) ?? ''
        ));
    }
  }

  setOfcDistrictList() {
    if (this.OfcDistrict) {
      this.filteredOfcDistrictList = this.OfcDistrict.valueChanges.pipe(
        startWith(''),
        debounceTime(200),
        map(value =>
          this.districtList?.filter((option: District) => option?.value?.toLowerCase().includes(value.toString().toLowerCase())) ?? ''
        ));
    }
  }

  setOfcThanaList() {
    if (this.ofcThana) {
      this.filteredOfcThanaList = this.ofcThana.valueChanges.pipe(
        startWith(''),
        debounceTime(200),
        map(value =>
          this.thanaList?.filter((option: Thana) => option?.value?.toLowerCase().includes(value.toString().toLowerCase())) ?? ''
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
  get country() {
    return this.form.controls['country'];
  }
  get district() {
    return this.form.controls['district'];
  }

  get thana() {
    return this.form.controls['thana'];
  }
  get incorporationNumber() {
    return this.form.controls['incorporationNumber'];
  }
  get incorporationDate() {
    return this.form.controls['incorporationDate'];
  }
  get registrationAuthority() {
    return this.form.controls['registrationAuthority'];
  }
  get registeredAddress() {
    return this.form.controls['registeredAddress'];
  }
  get tradeLicenseNumber() {
    return this.form.controls['tradeLicenseNumber'];
  }
  get dateOfTradeLicense() {
    return this.form.controls['dateOfTradeLicense'];
  }
  get expiredDate() {
    return this.form.controls['expiredDate'];
  }

  get issuingAuthority() {
    return this.form.controls['issuingAuthority'];
  }

  get tinNumber() {
    return this.form.controls['tinNumber'];
  }

  get OfcDistrict() {
    return this.form.controls['OfcDistrict'];
  }
  get ofcThana() {
    return this.form.controls['ofcThana'];
  }

  get ofcAddress() {
    return this.form.controls['ofcAddress'];
  }

  get ofcEmailAddress() {
    return this.form.controls['ofcEmailAddress'];
  }
  get ofcContactNo() {
    return this.form.controls['ofcContactNo'];
  }






}


