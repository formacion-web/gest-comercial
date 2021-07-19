import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule  } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from "@angular/material/input";
const material = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...material
  ],
  exports: [
    ...material
  ]
})
export class MaterialModule { }
