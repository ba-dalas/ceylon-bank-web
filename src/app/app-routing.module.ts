import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    // redirectTo:'bank-acc-info/local-acc',
    redirectTo:'users',
    pathMatch:'full'
  },
  {
    path:'bank-acc-info',
    loadChildren: () => import('./bank-account/bank-account.module').then(m=>m.BankAccountModule)
  },
  {
    path:'users',
    loadChildren: () => import('./user/user.module').then(m=>m.UserModule)
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
