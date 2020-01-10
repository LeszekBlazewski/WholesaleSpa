import { Component, OnInit } from '@angular/core';
import { OrderStatus } from 'src/app/models/enums/OrderStatus';
import { Order } from 'src/app/models/Order';
import { Observable, of } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
  selector: 'app-user-order-history-page',
  templateUrl: './user-order-history-page.component.html',
  styleUrls: ['./user-order-history-page.component.scss']
})
export class UserOrderHistoryPageComponent implements OnInit {

  orders$: Observable<Order[]>;

  constructor(private orderService: OrderService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {

    //this.orders$ = this.orderService.getAllOrdersForUser(this.authenticationService.currentUserValue.userId);
    // Moq
    this.orders$ = of(FAKE_DATA);
  }

}
