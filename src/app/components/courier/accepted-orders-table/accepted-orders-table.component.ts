import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSnackBar, MatTable } from '@angular/material';
import { OrderDetail } from 'src/app/models/OrderDetail';
import { AvailableOrder } from 'src/app/models/AvailableOrder';
import { OrderService } from 'src/app/services/order.service';
import { CourierService } from 'src/app/services/courier.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Address } from 'src/app/models/Address';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accepted-orders-table',
  templateUrl: './accepted-orders-table.component.html',
  styleUrls: ['./accepted-orders-table.component.scss']
})
export class AcceptedOrdersTableComponent implements OnInit, OnDestroy {


  @ViewChild(MatTable, { static: false }) table: MatTable<any>;

  currentOrdersDataSource: MatTableDataSource<AvailableOrder> = undefined;

  orderDetailsDataSource: MatTableDataSource<OrderDetail> = new MatTableDataSource();

  displayedColumnsOrderDetails: string[] = ['category', 'name', 'price', 'amount', 'value'];

  displayedColumns: string[] = ['issuedDate', 'clientAddress', 'totalOrderCost', 'actions'];

  private subscription: Subscription = new Subscription();

  constructor(private orderService: OrderService,
    private courierService: CourierService,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {

    //this.orderService.getCurrentOrdersForCourier(this.authenticationService.currentUserValue.userId).subscribe(orders => this.currentOrdersDataSource = new MatTableDataSource(orders));

    const sub = this.courierService.getLatestAcceptedOrder().subscribe(order => {
      this.currentOrdersDataSource.data.push(order);
      this.table.renderRows();
    })

    this.subscription.add(sub);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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

  getClientAddress(address: Address) {
    if (address)
      return `${address.postalCode ? address.postalCode : ''} ${address.city ? address.city : ''}, ${address.address ? address.address : ''}`;
  }

}
