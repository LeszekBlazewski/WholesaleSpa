import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ComponentsModule } from '../components/components.module';
import { AboutPageComponent } from './about-page/about-page.component';



@NgModule({
  declarations: [HomePageComponent, AboutPageComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [HomePageComponent, AboutPageComponent]
})
export class PagesModule { }
