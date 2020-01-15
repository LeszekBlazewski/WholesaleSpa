import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material';
import { OrderDetail } from 'src/app/models/OrderDetail';
import { AvailableOrder } from 'src/app/models/AvailableOrder';
import { OrderService } from 'src/app/services/order.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Address } from 'src/app/models/Address';
import { CourierService } from 'src/app/services/courier.service';
import { OrderStatus } from 'src/app/models/enums/OrderStatus';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-delivered-orders-table',
  templateUrl: './delivered-orders-table.component.html',
  styleUrls: ['./delivered-orders-table.component.scss']
})
export class DeliveredOrdersTableComponent implements OnInit, OnDestroy {

  @ViewChild(MatTable, { static: false }) table: MatTable<any>;

  orderDetailsDataSource: MatTableDataSource<OrderDetail>;

  deliveredOrdersDataSource: MatTableDataSource<AvailableOrder>;

  displayedColumns: string[] = ['issuedDate', 'clientAddress', 'totalOrderCost', 'actions'];

  private subscription: Subscription = new Subscription();

  constructor(private orderService: OrderService,
    private authenticationService: AuthenticationService,
    private courierService: CourierService) { }

  ngOnInit() {
    this.orderService.getCompletedOrdersForCourier(this.authenticationService.currentUserValue.userId).subscribe(orders => this.deliveredOrdersDataSource = new MatTableDataSource(orders));

    const sub = this.courierService.getLatestOrder().subscribe(order => {
      if (order.status == OrderStatus.completed) {
        this.deliveredOrdersDataSource.data.push(order);
        this.table.renderRows();
      }
    })

    this.subscription.add(sub);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  showOrderDetails(orderDetails: OrderDetail[]) {
    this.orderDetailsDataSource = new MatTableDataSource(orderDetails);
  }

  getClientAddress(address: Address) {
    if (address)
      return `${address.postalCode ? address.postalCode : ''} ${address.city ? address.city : ''}, ${address.addressDetails ? address.addressDetails : ''}`;
  }

  getTotalEarned() {
    return this.deliveredOrdersDataSource.data.reduce((a, b) => a + b.totalValue, 0)
  }

}
