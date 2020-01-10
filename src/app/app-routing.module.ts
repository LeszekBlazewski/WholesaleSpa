import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BrowseProductsComponent } from './components/product/browse-products/browse-products.component';
import { UserOrderHistoryComponent } from './components/user-order-history/user-order-history.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';


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
    component: UserOrderHistoryComponent
  },
  {
    path: 'admin/products',
    component: ProductPageComponent
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
