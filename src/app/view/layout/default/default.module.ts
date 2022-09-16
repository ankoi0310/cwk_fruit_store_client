import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultComponent} from "./default.component";
import {RouterOutlet} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {HomeComponent} from "../../page/home/home.component";
import {CarouselComponent} from "../../component/carousel/carousel.component"
import {ServicesComponent} from "../../component/services/services.component";
import {CategoriesComponent} from "../../component/categories/categories.component";


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    CarouselComponent,
    ServicesComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    SharedModule,

  ]
})
export class DefaultModule {
}
