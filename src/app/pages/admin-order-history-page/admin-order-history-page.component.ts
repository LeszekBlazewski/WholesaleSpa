import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-admin-order-history-page',
  templateUrl: './admin-order-history-page.component.html',
  styleUrls: ['./admin-order-history-page.component.scss']
})
export class AdminOrderHistoryPageComponent implements OnInit {

  orders$: Observable<Order[]>;


  constructor(private orderService: OrderService) { }

  ngOnInit() {

    this.orders$ = this.orderService.getAllOrders();

  }

}
