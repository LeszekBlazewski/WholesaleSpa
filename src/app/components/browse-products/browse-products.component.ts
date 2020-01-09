import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar, MatStepper } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Category } from 'src/app/models/Category';
import { FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ValidateProductAmount } from 'src/app/validators/amount.validator';
import { ProductTableRow } from 'src/app/models/ProductTableRow';
import { Order } from 'src/app/models/Order';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { OrderDetail } from 'src/app/models/OrderDetail';
import { OrderStatus } from 'src/app/models/enums/OrderStatus';
import { OrderService } from 'src/app/services/order.service';


const FAKE_DATA: ProductTableRow[] = [
  {
    product: {
      category: <Category>{ name: 'electronics' }, name: 'PC mouse', price: 30.54, stock: 78, productId: 1
    }
  },
  {
    product: {
      category: <Category>{ name: 'electronics' }, name: 'Keyboard', price: 223.54, stock: 500, productId: 2
    }
  },
  {
    product: {
      category: <Category>{ name: 'electronics' }, name: 'Router', price: 60, stock: 12, productId: 3
    }
  },
  {
    product: {
      category: <Category>{ name: 'groceries' }, name: 'Apples', price: 10.65, stock: 10, productId: 4
    }
  },
  {
    product: {
      category: <Category>{ name: 'groceries' }, name: 'Onions', price: 13.54, stock: 58, productId: 5
    }
  },
  {
    product: {
      category: <Category>{ name: 'clothing' }, name: 'Supreme hoodie', price: 80.54, stock: 100, productId: 6
    }
  },
  {
    product: {
      category: <Category>{ name: 'clothing' }, name: 'Nike dunk low', price: 323.54, stock: 28, productId: 7
    }
  }
];


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
    private orderService: OrderService) { }

  ngOnInit() {
    this.createTableData();
  }

  private createTableData() {

    // 1. fetch all products from api
    // this.productService.getAllProducts().subscribe(data => {

    //   const tableRows: ProductTableRow[] = [];

    //   data.forEach(fetchedProduct => {
    //     const referencedTableRow: ProductTableRow = <ProductTableRow>{
    //       product: fetchedProduct,
    //       amount: new FormControl(1, ValidateProductAmount(fetchedProduct.stock))
    //     }
    //     tableRows.push(referencedTableRow);
    //   })

    //   this.dataSource = new MatTableDataSource<ProductTableRow>(tableRows);
    // });

    // Moq
    FAKE_DATA.forEach(d => d.amount = new FormControl(1, ValidateProductAmount(d.product.stock)));
    this.dataSource = new MatTableDataSource<ProductTableRow>(FAKE_DATA);
    this.setTableFilter();
    this.selection = new SelectionModel<ProductTableRow>(true, []);
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
      clientId: 1,    // Moq this.authenticationService.currentUserValue.userId,
      date: new Date(),
      orderDetails: this.selectedProducts.map(p => <OrderDetail>{ product: p.product, amount: p.amount.value }),
      status: OrderStatus.created,
    }

    // Moq
    // this.orderService.placeOrder(order).subscribe(resp =>
    //   this.snackBar.open('Your order has been placed !', null, {
    //     duration: 2000,
    //     horizontalPosition: "right"
    //   }),
    //   (error) => this.snackBar.open('Server error, order has not been placed !', null, {
    //     duration: 2000,
    //     horizontalPosition: "right"
    //   }));
  }
}

