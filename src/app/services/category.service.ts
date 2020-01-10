import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private baseService: BaseService) { }

  getAllCategories(): Observable<Category[]> {
    return this.baseService.get(environment.categoriesUrl);
  }

  addCategory(category: Category): Observable<Category> {
    return this.baseService.post(environment.categoriesUrl, category);
  }

  updateCategory(category: Category): Observable<any> {
    return this.baseService.put(environment.categoriesUrl, category);
  }

  deleteCategory(category: Category): Observable<any> {
    return this.baseService.delete(environment.categoriesUrl + category.categoryId.toString());
  }
}
