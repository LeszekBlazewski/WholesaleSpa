import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Category } from 'src/app/models/Category';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProductModalComponent } from '../edit-product-modal/edit-product-modal.component';
import { ProductService } from 'src/app/services/product.service';
import { MatSnackBar, MatTable } from '@angular/material';
import { DeleteModalComponent } from '../../shared/delete-modal/delete-modal.component';


@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  @Input() products: Product[];

  @Input() categories: Category[];

  @ViewChild(MatTable, { static: false }) table: MatTable<any>;


  displayedColumns: string[] = ['productId', 'categoryName', 'productName', 'price', 'stock', 'action'];

  constructor(private modalService: NgbModal,
    private productService: ProductService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {

  }

  rowUpdateClick(element: Product) {
    const modalRef = this.modalService.open(EditProductModalComponent);
    const product: Product = <Product>{
      productId: element.productId,
      category: element.category,
      name: element.name,
      price: element.price,
      stock: element.stock
    };

    modalRef.componentInstance.product = product;

    modalRef.componentInstance.categories = this.categories;

    modalRef.result.then((updateProduct) => {
      this.productService.updateProduct(updateProduct).subscribe(resp => {
        const objectIndex = this.products.findIndex(p => p.productId == updateProduct.productId);
        this.products.splice(objectIndex, 1, updateProduct);
        this.table.renderRows();
        this.snackBar.open('Product updated successfuly', null, {
          duration: 2000,
          horizontalPosition: "right"
        })
      },
        (error) => { });  //Moq
    }, (rejectedReason) => { })

  }

  rowDeleteClick(element: Product) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.modalHeader = 'Delete product';
    modalRef.componentInstance.modalBody = `Are you sure you want to delete product with ID: ${element.productId} ?`;
    modalRef.componentInstance.modalWarning = 'This operation can not be undone !';

    modalRef.result.then(() => {
      this.productService.deleteProduct(element).subscribe(() => {
        let objectIndex = this.products.findIndex(p => p.productId === element.productId);
        this.products.splice(objectIndex, 1);
        this.table.renderRows();
        this.snackBar.open('Product has been removed !', null, {
          duration: 2000,
          horizontalPosition: "right"
        })
      })
    }, (rejectedReason) => { });

  }

  addNewProduct() {
    const modalRef = this.modalService.open(EditProductModalComponent);
    modalRef.componentInstance.categories = this.categories;
    modalRef.result.then((newProduct) => {
      this.productService.addProduct(newProduct).subscribe(addedProduct => {
        this.products.push(addedProduct);
        this.table.renderRows();
        this.snackBar.open('Product added successfuly', null, {
          duration: 2000,
          horizontalPosition: "right"
        })
      },
        (error) => { });  //Moq
    }, (rejectedReason) => { })
  }

}
