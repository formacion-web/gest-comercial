import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';

const routes: Routes = [
  {path:'list',component:CustomerListComponent},
  {path:'register',component:CustomerRegisterComponent},
  {path:':id',component:CustomerDataComponent},
  {path:'',redirectTo: 'list',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
