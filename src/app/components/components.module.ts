import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { BrowseProductsComponent } from './browse-products/browse-products.component';
import { UserOrderHistoryComponent } from './user-order-history/user-order-history.component';
@NgModule({
  declarations: [LoginComponent, RegisterComponent, BrowseProductsComponent, UserOrderHistoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [LoginComponent, RegisterComponent, BrowseProductsComponent, UserOrderHistoryComponent]
})
export class ComponentsModule { }
