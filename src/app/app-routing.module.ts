import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BrowseProductsComponent } from './components/product/browse-products/browse-products.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { UserOrderHistoryPageComponent } from './pages/user-order-history-page/user-order-history-page.component';
import { AdminOrderHistoryPageComponent } from './pages/admin-order-history-page/admin-order-history-page.component';
import { AdminStatisticsPageComponent } from './pages/admin-statistics-page/admin-statistics-page.component';
import { CourierPendingOrdersPageComponent } from './pages/courier-pending-orders-page/courier-pending-orders-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'products',
    component: BrowseProductsComponent
  },
  {
    path: 'user/order-history',
    component: UserOrderHistoryPageComponent
  },
  {
    path: 'admin/order-history',
    component: AdminOrderHistoryPageComponent
  },
  {
    path: 'admin/products',
    component: ProductPageComponent
  },
  {
    path: 'admin/statistics',
    component: AdminStatisticsPageComponent
  },
  {
    path: 'courier/orders',
    component: CourierPendingOrdersPageComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
