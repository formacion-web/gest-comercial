import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    NotfoundComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CommonsRoutingModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent
  ]
})
export class CommonsModule { }
