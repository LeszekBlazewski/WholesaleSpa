import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from 'src/app/models/Order';
import { OrderStatus } from 'src/app/models/enums/OrderStatus';
import { OrderService } from 'src/app/services/order.service';

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
  selector: 'app-admin-order-history-page',
  templateUrl: './admin-order-history-page.component.html',
  styleUrls: ['./admin-order-history-page.component.scss']
})
export class AdminOrderHistoryPageComponent implements OnInit {

  orders$: Observable<Order[]>;


  constructor(private orderService: OrderService) { }

  ngOnInit() {

    //this.orders$ = this.orderService.getAllOrders();

    // Moq
    this.orders$ = of(FAKE_DATA);
  }

}
