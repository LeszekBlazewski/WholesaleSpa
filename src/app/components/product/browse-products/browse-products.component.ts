import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSnackBar, MatStepper, MatTable } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ValidateProductAmount } from 'src/app/validators/amount.validator';
import { ProductTableRow } from 'src/app/models/ProductTableRow';
import { Order } from 'src/app/models/Order';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { OrderDetail } from 'src/app/models/OrderDetail';
import { OrderStatus } from 'src/app/models/enums/OrderStatus';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-browse-products',
  templateUrl: './browse-products.component.html',
  styleUrls: ['./browse-products.component.scss']
})
export class BrowseProductsComponent implements OnInit {

  displayedColumns: string[] = ['select', 'category', 'name', 'price', 'stock', 'quantity'];
  quantityColumn: string[] = ['quantity'];
  dataSource: MatTableDataSource<ProductTableRow>;
  selection: SelectionModel<ProductTableRow>;
  currentStep: number = 1;
  selectedProducts: ProductTableRow[];

  constructor(private productService: ProductService,
    private snackBar: MatSnackBar,
    private authenticationService: AuthenticationService,
    private orderService: OrderService,
    private router: Router) { }

  ngOnInit() {
    this.createTableData();
  }

  createTableData() {

    //1. fetch all products from api
    this.productService.getAllProducts().subscribe(data => {

      const tableRows = data.map(p => <ProductTableRow>{ product: p, amount: new FormControl(p.stock > 0 ? 1 : 0, ValidateProductAmount(p.stock)) });

      this.dataSource = new MatTableDataSource<ProductTableRow>(tableRows);
      this.setTableFilter();
      this.selection = new SelectionModel<ProductTableRow>(true, []);
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.filteredData.forEach(row => this.selection.select(row));
  }

  setTableFilter() {
    this.dataSource.filterPredicate = (data: ProductTableRow, filter: string) => {
      const filterLowerCase = filter.toLocaleLowerCase();
      return data.product.category.name.toLocaleLowerCase().includes(filterLowerCase)
        || data.product.name.toLocaleLowerCase().includes(filterLowerCase);
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  validateOrder(stepper: MatStepper) {

    this.selectedProducts = this.selection.selected;

    // calculate price for each product
    this.selectedProducts.forEach(p => p.value = p.product.price * p.amount.value);

    // no products selected 
    if (this.selectedProducts.length == 0) {
      this.snackBar.open('Please choose at least one product !', null, {
        duration: 2000,
        horizontalPosition: "right"
      });
    }
    else {    // 1. check if fgor each selected product quanitity is correct

      for (const order of this.selectedProducts) {
        if (order.amount.invalid) {
          this.snackBar.open('Please correct your order before going to summary !', null, {
            duration: 2000,
            horizontalPosition: "right"
          });
          return;
        }
      }
      stepper.selected.completed = true;
      this.currentStep = 2;
      stepper.next();
    }
  }

  getHeader(): string {
    switch (this.currentStep) {
      case 1:
        return 'Available products';
      case 2:
        return 'Order summary';
    }
  }


  calculateTotalOrderValue(): number {
    return this.selectedProducts.reduce((prev, next) => prev + next.value, 0);
  }


  placeOrder() {

    const order = <Order>{
      clientId: this.authenticationService.currentUserValue.userId,
      date: new Date(),
      orderDetails: this.selectedProducts.map(p => <OrderDetail>{ product: p.product, amount: p.amount.value }),
      status: OrderStatus.created
    }

    this.orderService.placeOrder(order).subscribe(resp => {
      this.snackBar.open('Your order has been placed !', null, {
        duration: 2000,
        horizontalPosition: "right"
      });
      this.router.navigate(['user/order-history']);
    }
      ,
      (error) => this.snackBar.open('Server error, order has not been placed !', null, {
        duration: 2000,
        horizontalPosition: "right"
      }));
  }
}

