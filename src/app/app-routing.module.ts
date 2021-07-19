import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'customer', loadChildren: ()=>import('./customer/customer.module').then(m=>m.CustomerModule)},
  // {path:'customer',component:CustomerComponent,
  // children:[
  //   {path:'lista',component:CustomerListComponent},
  //   {path:':id', component:CustomerDataComponent}
  // ]
  // {path:'customer:id', component: CustomerDataComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
