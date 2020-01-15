import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { CourierService } from 'src/app/services/courier.service';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { OrderDetail } from 'src/app/models/OrderDetail';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AvailableOrder } from 'src/app/models/AvailableOrder';
import { Address } from 'src/app/models/Address';
import { OrderStatus } from 'src/app/models/enums/OrderStatus';

@Component({
  selector: 'app-available-orders-table',
  templateUrl: './available-orders-table.component.html',
  styleUrls: ['./available-orders-table.component.scss']
})
export class AvailableOrdersTableComponent implements OnInit {

  orderDetailsDataSource: MatTableDataSource<OrderDetail>;

  availableOrdersDataSource: MatTableDataSource<AvailableOrder>;

  displayedColumns: string[] = ['issuedDate', 'clientAddress', 'totalOrderCost', 'actions'];

  constructor(private orderService: OrderService,
    private courierService: CourierService,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.fetchAvailableOrders();
  }

  showOrderDetails(orderDetails: OrderDetail[]) {
    this.orderDetailsDataSource = new MatTableDataSource(orderDetails);
  }

  acceptOrder(order: AvailableOrder) {
    const orderCopy = <AvailableOrder>{
      client: order.client,
      date: order.date,
      orderDetails: order.orderDetails,
      status: OrderStatus.inProgress,
      orderId: order.orderId,
      totalValue: order.totalValue,
    }
    this.orderService.updateOrderStatus(orderCopy, this.authenticationService.currentUserValue.userId).subscribe(resp => {
      this.courierService.addOrder(orderCopy);
      this.availableOrdersDataSource.data = this.availableOrdersDataSource.data.filter(o => o.orderId != orderCopy.orderId);
      this.snackBar.open('Order accepted !', null, {
        duration: 2000,
        horizontalPosition: "right"
      })
    })
  }

  fetchAvailableOrders() {
    this.orderService.getAllAvailableOrders().subscribe(orders => this.availableOrdersDataSource = new MatTableDataSource(orders));
  }

  getClientAddress(address: Address) {
    if (address)
      return `${address.postalCode ? address.postalCode : ''} ${address.city ? address.city : ''}, ${address.addressDetails ? address.addressDetails : ''}`;
  }

}
