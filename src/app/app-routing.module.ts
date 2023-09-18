import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    // redirectTo:'bank-acc-info/local-acc',
    redirectTo:'users/list',
    pathMatch:'full'
  },
  {
    path:'users',
    loadChildren: () => import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:'bank-acc-info',
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
