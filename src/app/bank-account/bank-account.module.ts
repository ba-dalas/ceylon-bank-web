import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccountRoutingModule } from './bank-account-routing.module';
import { LocalBankAccInfoComponent } from './local-bank-acc-info/local-bank-acc-info.component';
import { LocalBankAccInfoShellComponent } from './local-bank-acc-info-shell/local-bank-acc-info-shell.component';
import { SharedModule } from '../shared/shared.module';
import { LocalBankOrganizationInfoComponent } from './local-bank-organization-info/local-bank-organization-info.component';
import { LocalBankOrganizationInfoShellComponent } from './local-bank-organization-info-shell/local-bank-organization-info-shell.component';


@NgModule({
  declarations: [
    LocalBankAccInfoComponent,
    LocalBankAccInfoShellComponent,
    LocalBankOrganizationInfoComponent,
    LocalBankOrganizationInfoShellComponent
  ],
  imports: [
    CommonModule,
    BankAccountRoutingModule,
    SharedModule,
  ]
})
export class BankAccountModule { }
