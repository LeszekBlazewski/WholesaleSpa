import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ComponentsModule } from '../components/components.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { MaterialModule } from '../material.module';
import { UserOrderHistoryPageComponent } from './user-order-history-page/user-order-history-page.component';
import { AdminOrderHistoryPageComponent } from './admin-order-history-page/admin-order-history-page.component';
import { AdminStatisticsPageComponent } from './admin-statistics-page/admin-statistics-page.component';
import { CourierPendingOrdersPageComponent } from './courier-pending-orders-page/courier-pending-orders-page.component';



@NgModule({
  declarations: [HomePageComponent, AboutPageComponent, ProductPageComponent, UserOrderHistoryPageComponent, AdminOrderHistoryPageComponent, AdminStatisticsPageComponent, CourierPendingOrdersPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
  ],
  exports: [HomePageComponent, AboutPageComponent, ProductPageComponent, UserOrderHistoryPageComponent, AdminOrderHistoryPageComponent, AdminStatisticsPageComponent, CourierPendingOrdersPageComponent]
})
export class PagesModule { }
