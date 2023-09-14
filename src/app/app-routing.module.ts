import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'bank-acc-info/local-acc',
    pathMatch:'full'
  },
  {
    path:'',
    loadChildren: () => import('./bank-account/bank-account.module').then(m=>m.BankAccountModule)
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
