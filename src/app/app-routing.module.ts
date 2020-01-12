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
import { AuthGuard } from './guards/auth.guard';
import { Role } from './models/enums/Role';


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
    component: BrowseProductsComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [Role.Client, Role.Employee]
    }
  },
  {
    path: 'user/order-history',
    component: UserOrderHistoryPageComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [Role.Client, Role.Employee]
    }
  },
  {
    path: 'admin/order-history',
    component: AdminOrderHistoryPageComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [Role.Employee]
    }
  },
  {
    path: 'admin/products',
    component: ProductPageComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [Role.Employee]
    }
  },
  {
    path: 'admin/statistics',
    component: AdminStatisticsPageComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [Role.Employee]
    }
  },
  {
    path: 'courier/orders',
    component: CourierPendingOrdersPageComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [Role.Courier, Role.Employee]
    }
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
