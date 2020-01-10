import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private baseService: BaseService) { }

  getAllProducts(): Observable<Product[]> {
    return this.baseService.get(environment.productsUrl);
  }

  addProduct(product: Product): Observable<Product> {
    return this.baseService.post(environment.productsUrl, product);
  }

  updateProduct(product: Product): Observable<any> {
    return this.baseService.put(environment.productsUrl, product);
  }

  deleteProduct(product: Product): Observable<any> {
    return this.baseService.delete(environment.productsUrl + product.productId.toString());
  }
}
