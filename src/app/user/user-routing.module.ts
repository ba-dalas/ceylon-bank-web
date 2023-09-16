import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditShellComponent } from './user-edit-shell/user-edit-shell.component';

const routes: Routes = [
  {
    path: '',
    component: UserEditShellComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
