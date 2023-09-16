import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserEditShellComponent } from './user-edit-shell/user-edit-shell.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserEditComponent,
    UserEditShellComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
