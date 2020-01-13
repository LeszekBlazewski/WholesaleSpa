import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { OrderDetail } from 'src/app/models/OrderDetail';

@Component({
  selector: 'app-accepted-orders-table',
  templateUrl: './accepted-orders-table.component.html',
  styleUrls: ['./accepted-orders-table.component.scss']
})
export class AcceptedOrdersTableComponent implements OnInit {

  // availableOrders$: Observable<AvailableOrder[]>;

  // displayedColumnsOrderDetails: string[] = ['category', 'name', 'price', 'amount', 'value'];

  // displayedColumns: string[] = ['issuedDate', 'clientAddress', 'totalOrderCost', 'actions'];

  constructor(/*private orderService: OrderService,
    private courierService: CourierService,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar*/) { }

  ngOnInit() {
    //this.fetchAvailableOrders();
  }

  // showOrderDetails(orderDetails: OrderDetail[]) {
  //   this.orderDetailsDataSource.data = orderDetails;
  // }

  // acceptOrder(order: AvailableOrder) {
  //   this.orderService.updateOrderStatus(order, this.authenticationService.currentUserValue.userId).subscribe(resp => {
  //     this.courierService.addNewAcceptedOrder(order);
  //     this.snackBar.open('Order accepted !', null, {
  //       duration: 2000,
  //       horizontalPosition: "right"
  //     })
  //   })
  // }

  // fetchAvailableOrders() {
  //   this.availableOrders$ = this.orderService.getAllAvailableOrders();
  // }

  // getClientAddress(address: Address) {
  //   if (address)
  //     return `${address.postalCode ? address.postalCode : ''} ${address.city ? address.city : ''}, ${address.address ? address.address : ''}`;
  // }
}
