import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultComponent} from "./default.component";
import {RouterOutlet} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {HomeComponent} from "../../page/home/home.component";
import {CarouselComponent} from "../../component/carousel/carousel.component"
import {ServicesComponent} from "../../component/services/services.component";
import {CategoriesComponent} from "../../component/categories/categories.component";
import {FeaturedComponent} from "../../component/featured/featured.component";
import {ProductItemComponent} from "../../component/product-item/product-item.component";
import {CountDownComponent} from "../../component/count-down/count-down.component";


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    CarouselComponent,
    ServicesComponent,
    CategoriesComponent,
    FeaturedComponent,
    ProductItemComponent,
    CountDownComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    SharedModule,

  ]
})
export class DefaultModule {
}
