import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatAutocompleteModule,


  ],
  exports:[
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatAutocompleteModule
  ]
})
export class SharedModule { }
