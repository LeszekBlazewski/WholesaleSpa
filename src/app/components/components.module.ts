import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { BrowseProductsComponent } from './browse-products/browse-products.component';
@NgModule({
  declarations: [LoginComponent, RegisterComponent, BrowseProductsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [LoginComponent, RegisterComponent, BrowseProductsComponent]
})
export class ComponentsModule { }
