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
import { OrderHistoryTableComponent } from './order/order-history-table/order-history-table.component';
import { ProductStatsComponent } from './product/product-stats/product-stats.component';
import { CourierStatsComponent } from './courier/courier-stats/courier-stats.component';
import { AvailableOrdersTableComponent } from './courier/available-orders-table/available-orders-table.component';
import { AcceptedOrdersTableComponent } from './courier/accepted-orders-table/accepted-orders-table.component';
import { DeliveredOrdersTableComponent } from './courier/delivered-orders-table/delivered-orders-table.component';
import { OrderDetailTableComponent } from './order/order-detail-table/order-detail-table.component';
@NgModule({
  declarations: [LoginComponent, RegisterComponent, BrowseProductsComponent, ProductTableComponent, CategoriesTableComponent, EditCategoryModalComponent, EditProductModalComponent, OrderHistoryTableComponent, ProductStatsComponent, CourierStatsComponent, AvailableOrdersTableComponent, AcceptedOrdersTableComponent, DeliveredOrdersTableComponent, OrderDetailTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [LoginComponent, RegisterComponent, BrowseProductsComponent, ProductTableComponent, CategoriesTableComponent, OrderHistoryTableComponent, ProductStatsComponent, CourierStatsComponent, AvailableOrdersTableComponent, AcceptedOrdersTableComponent, DeliveredOrdersTableComponent]
})
export class ComponentsModule { }
