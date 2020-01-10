import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Observable, of } from 'rxjs';
import { Order } from 'src/app/models/Order';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { OrderStatus } from 'src/app/models/enums/OrderStatus';
import { MatSort, Sort, MatTable, MatTableDataSource } from '@angular/material';
import { map } from 'rxjs/operators';
import { OrderDetail } from 'src/app/models/OrderDetail';

const now: Date = new Date();

const FAKE_DATA: Order[] = [
  {
    date: now,
    status: OrderStatus.created,
    orderDetails: [{ product: { name: 'nike low', price: 123.50, category: { name: 'Shoes' } }, amount: 2 },
    { product: { name: 'nike low', price: 123.50, category: { name: 'Shoes' } }, amount: 2 }],
    totalValue: 1
  },
  {
    date: new Date(now.getDate() - 1),
    status: OrderStatus.canceled,
    orderDetails: [{ product: { name: 'Redbull', price: 62.50, category: { name: 'Shoes' } }, amount: 2 }],
    totalValue: 3
  },
  {
    date: new Date(now.getDate() - 2),
    status: OrderStatus.inProgress,
    orderDetails: [{ product: { name: 'nike low', price: 123.50, category: { name: 'Shoes' } }, amount: 2 }],
    totalValue: 2
  },
]


@Component({
  selector: 'app-user-order-history',
  templateUrl: './user-order-history.component.html',
  styleUrls: ['./user-order-history.component.scss']
})
export class UserOrderHistoryComponent implements OnInit {

  orderDetailsDataSource: MatTableDataSource<OrderDetail> = new MatTableDataSource();

  userOrders$: Observable<Order[]>

  constructor(private orderService: OrderService,
    private authenticationService: AuthenticationService) { }


  displayedColumns: string[] = ['date', 'status', 'totalOrderCost', 'details'];

  displayedColumnsOrderDetails: string[] = ['category', 'name', 'price', 'amount', 'value']

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;



  ngOnInit() {

    //this.userOrders$ = this.orderService.getAllOrdersForUser(this.authenticationService.currentUserValue.userId);



    // Moq
    this.userOrders$ = of(FAKE_DATA);
  }

  sortData(sort: Sort) {

    if (!sort.active || sort.direction === '') {
      return;
    }

    this.userOrders$ = this.userOrders$.pipe(map(results => {

      return results.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'date': return this.compare(a.date, b.date, isAsc);
          case 'status': return this.compare(a.status, b.status, isAsc);
          case 'totalOrderCost': return this.compare(a.totalValue, b.totalValue, isAsc);
        }
      })
    }));

    this.table.renderRows();
  }

  compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  showOrderDetails(orderDetails: OrderDetail[]) {
    this.orderDetailsDataSource.data = orderDetails;
  }

  getTotalCost(): number {
    return this.orderDetailsDataSource.data.reduce((a, b) => (a + (b.amount * b.product.price)), 0);
  }

}
