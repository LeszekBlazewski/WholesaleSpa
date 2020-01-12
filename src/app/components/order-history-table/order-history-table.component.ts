import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { OrderStatus } from 'src/app/models/enums/OrderStatus';
import { MatTableDataSource, MatSort, MatTable, Sort } from '@angular/material';
import { OrderDetail } from 'src/app/models/OrderDetail';
import { Observable, of } from 'rxjs';
import { Order } from 'src/app/models/Order';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order-history-table',
  templateUrl: './order-history-table.component.html',
  styleUrls: ['./order-history-table.component.scss']
})
export class OrderHistoryTableComponent implements OnInit {

  orderDetailsDataSource: MatTableDataSource<OrderDetail> = new MatTableDataSource();

  @Input() orders: Order[]

  @Input() isAdminTable: boolean;

  constructor() { }

  displayedColumns: string[];

  displayedColumnsOrderDetails: string[] = ['category', 'name', 'price', 'amount', 'value']

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;



  ngOnInit() {

    if (this.isAdminTable)
      this.displayedColumns = ['date', 'clientId', 'courierId', 'status', 'totalOrderCost', 'details'];
    else
      this.displayedColumns = ['date', 'status', 'totalOrderCost', 'details'];

  }

  sortData(sort: Sort) {

    if (!sort.active || sort.direction === '') {
      return;
    }

    this.orders = this.orders.sort((a: Order, b: Order) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'date': return this.compare(a.date, b.date, isAsc);
        case 'status': return this.compare(a.status, b.status, isAsc);
        case 'totalOrderCost': return this.compare(a.totalValue, b.totalValue, isAsc);
        case 'clientId': return this.compare(a.clientId, b.clientId, isAsc);
        case 'courierId': return this.compare(a.courierId, b.courierId, isAsc);
      }
    });
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
