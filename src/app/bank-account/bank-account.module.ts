import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccountRoutingModule } from './bank-account-routing.module';
import { LocalBankAccInfoComponent } from './local-bank-acc-info/local-bank-acc-info.component';
import { LocalBankAccInfoShellComponent } from './local-bank-acc-info-shell/local-bank-acc-info-shell.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LocalBankAccInfoComponent,
    LocalBankAccInfoShellComponent
  ],
  imports: [
    CommonModule,
    BankAccountRoutingModule,
    SharedModule,
  ]
})
export class BankAccountModule { }
