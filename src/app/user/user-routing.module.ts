import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditShellComponent } from './user-edit-shell/user-edit-shell.component';
import { UserListShellComponent } from './user-list-shell/user-list-shell.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'users/list',
    pathMatch: 'full'
  },
  {
    path:'list',
    component:UserListShellComponent

  },
  {
    path: ':id/edit',
    component: UserEditShellComponent,

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
