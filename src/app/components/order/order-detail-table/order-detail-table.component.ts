import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { OrderDetail } from 'src/app/models/OrderDetail';

@Component({
  selector: 'app-order-detail-table',
  templateUrl: './order-detail-table.component.html',
  styleUrls: ['./order-detail-table.component.scss']
})
export class OrderDetailTableComponent implements OnInit {

  @Input() orderDetailsDataSource: MatTableDataSource<OrderDetail>;

  displayedColumnsOrderDetails: string[] = ['category', 'name', 'price', 'amount', 'value', 'close'];

  constructor() { }

  ngOnInit() {
  }

  closeDetails() {
    this.orderDetailsDataSource = undefined;
  }

}
