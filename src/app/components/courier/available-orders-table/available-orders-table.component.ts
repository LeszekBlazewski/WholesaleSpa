import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { CourierService } from 'src/app/services/courier.service';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/Order';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { OrderDetail } from 'src/app/models/OrderDetail';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AvailableOrder } from 'src/app/models/AvailableOrder';
import { Address } from 'src/app/models/Address';

@Component({
  selector: 'app-available-orders-table',
  templateUrl: './available-orders-table.component.html',
  styleUrls: ['./available-orders-table.component.scss']
})
export class AvailableOrdersTableComponent implements OnInit {

  orderDetailsDataSource: MatTableDataSource<OrderDetail> = new MatTableDataSource();

  availableOrders$: Observable<AvailableOrder[]>;

  displayedColumns: string[] = ['issuedDate', 'clientAddress', 'totalOrderCost', 'actions'];

  constructor(private orderService: OrderService,
    private courierService: CourierService,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.fetchAvailableOrders();
  }

  showOrderDetails(orderDetails: OrderDetail[]) {
    this.orderDetailsDataSource.data = orderDetails;
  }

  acceptOrder(order: AvailableOrder) {
    this.orderService.updateOrderStatus(order, this.authenticationService.currentUserValue.userId).subscribe(resp => {
      this.courierService.addNewAcceptedOrder(order);
      this.snackBar.open('Order accepted !', null, {
        duration: 2000,
        horizontalPosition: "right"
      })
    })
  }

  fetchAvailableOrders() {
    this.availableOrders$ = this.orderService.getAllAvailableOrders();
  }

  getClientAddress(address: Address) {
    if (address)
      return `${address.postalCode ? address.postalCode : ''} ${address.city ? address.city : ''}, ${address.address ? address.address : ''}`;
  }

}
