import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { Observable, of } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import { AuthenticationService } from 'src/app/services/authentication.service';


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

    this.orders$ = this.orderService.getAllOrdersForUser(this.authenticationService.currentUserValue.userId);


  }

}
