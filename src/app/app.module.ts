import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { DefaultModule } from "./view/layout/default/default.module";
import { FullWidthModule } from "./view/layout/full-width/full-width.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    DefaultModule,
    FullWidthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
