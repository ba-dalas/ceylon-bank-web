import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';



@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatStepperModule


  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule,
    MatStepperModule
  ]
})
export class SharedModule { }
