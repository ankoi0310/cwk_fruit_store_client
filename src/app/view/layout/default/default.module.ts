import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from "./default.component";
import { RouterOutlet } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { HomeComponent } from "../../page/home/home.component";



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    SharedModule,

  ]
})
export class DefaultModule { }
