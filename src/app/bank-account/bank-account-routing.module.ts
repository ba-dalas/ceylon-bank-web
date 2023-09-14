import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalBankAccInfoShellComponent } from './local-bank-acc-info-shell/local-bank-acc-info-shell.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'bank-acc-info/local-acc',
    pathMatch: 'full'
  },
  {
    path:'local-acc',
    component:LocalBankAccInfoShellComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankAccountRoutingModule { }
