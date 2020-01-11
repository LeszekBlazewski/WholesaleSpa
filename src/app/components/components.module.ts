import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { BrowseProductsComponent } from './product/browse-products/browse-products.component';
import { ProductTableComponent } from './product/product-table/product-table.component';
import { CategoriesTableComponent } from './category/categories-table/categories-table.component';
import { EditCategoryModalComponent } from './category/edit-category-modal/edit-category-modal.component';
import { EditProductModalComponent } from './product/edit-product-modal/edit-product-modal.component';
import { OrderHistoryTableComponent } from './order-history-table/order-history-table.component';
import { ProductStatsComponent } from './product/product-stats/product-stats.component';
@NgModule({
  declarations: [LoginComponent, RegisterComponent, BrowseProductsComponent, ProductTableComponent, CategoriesTableComponent, EditCategoryModalComponent, EditProductModalComponent, OrderHistoryTableComponent, ProductStatsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [LoginComponent, RegisterComponent, BrowseProductsComponent, ProductTableComponent, CategoriesTableComponent, OrderHistoryTableComponent, ProductStatsComponent]
})
export class ComponentsModule { }
