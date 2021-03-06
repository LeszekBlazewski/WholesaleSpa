import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/models/Product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss']
})
export class EditProductModalComponent implements OnInit {

  @Input() product: Product;

  @Input() categories: Category[];

  productEditForm: FormGroup;

  constructor(public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productEditForm = this.formBuilder.group({
      productId: [this.product ? this.product.productId : 0],
      name: [this.product ? this.product.name : '', Validators.required],
      price: [this.product ? this.product.price : '', [Validators.required, Validators.pattern(/^\d+\.?\d{0,2}$/)]],
      stock: [this.product ? this.product.stock : '', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      category: [this.product?.category ? this.categories.find(c => c.categoryId == this.product.category.categoryId) : null],
    })
  }

  submitForm() {

    if (this.productEditForm.invalid) {
      if (this.productEditForm.controls.name.hasError('required'))
        this.productEditForm.controls.name.markAsDirty();

      if (this.productEditForm.controls.price.hasError('required'))
        this.productEditForm.controls.price.markAsDirty();

      if (this.productEditForm.controls.stock.hasError('required'))
        this.productEditForm.controls.stock.markAsDirty();

      return;
    }

    const product: Product = this.productEditForm.value;

    product.price = +product.price;

    product.stock = +product.stock;

    this.activeModal.close(product);
  }

  getErrorMessageProductName() {
    return this.productEditForm.controls.name.hasError('required') ? 'Name is required' : '';
  }

  getErrorMessagePrice() {
    return this.productEditForm.controls.price.hasError('required') ? 'Price is required' : this.productEditForm.controls.price.hasError('pattern') ? 'Price format X.YY' : '';
  }

  getErrorMessageStock() {
    return this.productEditForm.controls.stock.hasError('required') ? 'Stock is required' : this.productEditForm.controls.stock.hasError('pattern') ? 'Wrong input' : '';
  }

}
