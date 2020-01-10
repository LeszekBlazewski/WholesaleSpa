import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ComponentsModule } from '../components/components.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [HomePageComponent, AboutPageComponent, ProductPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
  ],
  exports: [HomePageComponent, AboutPageComponent, ProductPageComponent]
})
export class PagesModule { }
