import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';

import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDataComponent,
    CustomerRegisterComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class CustomerModule { }
