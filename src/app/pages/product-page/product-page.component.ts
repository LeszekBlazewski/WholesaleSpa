import { Component, OnInit, IterableDiffers, DoCheck } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from 'src/app/models/Product';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, DoCheck {

  initaliyLoaded = true;

  products: Product[];

  categories: Category[];

  iterableDiffer: any;

  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    iterableDiffers: IterableDiffers) {

    this.iterableDiffer = iterableDiffers.find([]).create(null);
  }

  ngOnInit() {

    this.productService.getAllProducts().subscribe(p => this.products = p);

    this.categoryService.getAllCategories().subscribe(c => this.categories = c);

  }

  ngDoCheck(): void {
    let changes = this.iterableDiffer.diff(this.categories);

    if (changes && !this.initaliyLoaded) {
      this.productService.getAllProducts().subscribe(p => this.products = p);
    } else
      this.initaliyLoaded = false;
  }

}
