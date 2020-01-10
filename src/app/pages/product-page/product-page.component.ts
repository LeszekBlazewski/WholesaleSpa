import { Component, OnInit, IterableDiffers, DoCheck } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from 'src/app/models/Product';
import { Category } from 'src/app/models/Category';

const FAKE_DATA_CATEGORY: Category[] = [
  { categoryId: 1, name: 'shoes' },
  { categoryId: 2, name: 'clothes' },
  { categoryId: 3, name: 'electronics' },
]

const FAKE_DATA_PRODUCT: Product[] = [
  {
    category: <Category>{ name: 'electronics', categoryId: 1 }, name: 'PC mouse', price: 30.54, stock: 78, productId: 1
  },
  {
    category: <Category>{ name: 'groceries', categoryId: 2 }, name: 'Apples', price: 20.54, stock: 72, productId: 2
  },
  {
    category: <Category>{ name: 'clothing', categoryId: 3 }, name: 'Cap', price: 10.54, stock: 3, productId: 3
  }
]

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

    // Moq
    this.products = FAKE_DATA_PRODUCT;

    this.categories = FAKE_DATA_CATEGORY;


    //this.productService.getAllProducts().subscribe(p => this.products = p);

    //this.categoryService.getAllCategories().subscribe(c => this.categories = c);

  }

  ngDoCheck(): void {
    let changes = this.iterableDiffer.diff(this.categories);

    if (changes && !this.initaliyLoaded) {
      //this.productService.getAllProducts().subscribe(p => this.products = p);
    } else
      this.initaliyLoaded = false;
  }

}
