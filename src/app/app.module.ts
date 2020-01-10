import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './components/shared/shared.module';
import { AuthenticationService } from './services/authentication.service';
import { BaseService } from './services/base.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { OrderService } from './services/order.service';
import { CategoryService } from './services/category.service';
import { DeleteModalComponent } from './components/shared/delete-modal/delete-modal.component';
import { EditProductModalComponent } from './components/product/edit-product-modal/edit-product-modal.component';
import { EditCategoryModalComponent } from './components/category/edit-category-modal/edit-category-modal.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ComponentsModule,
    SharedModule,
    PagesModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule
  ],
  entryComponents: [
    DeleteModalComponent,
    EditProductModalComponent,
    EditCategoryModalComponent
  ],
  providers: [BaseService, AuthenticationService, UserService, ProductService, OrderService, CategoryService,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
