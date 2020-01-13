import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Order } from '../models/Order';
import { environment } from 'src/environments/environment';
import { AvailableOrder } from '../models/AvailableOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private baseService: BaseService) { }


  placeOrder(order: Order): Observable<any> {
    return this.baseService.post(environment.orderUrl, order);
  }

  updateOrderStatus(order: AvailableOrder, courierId: number): Observable<any> {
    const url = environment.orderUrl + order.orderId.toString();
    return this.baseService.put(url, { status: order.status, courierId: courierId });
  }

  getAllOrdersForUser(userId: number): Observable<Order[]> {
    return this.baseService.get(environment.orderUrl + userId.toString());
  }

  getAllOrders(): Observable<Order[]> {
    return this.baseService.get(environment.orderUrl);
  }

  getAllAvailableOrders(): Observable<AvailableOrder[]> {
    return this.baseService.get(environment.orderUrl + environment.availableOrdersUrl);
  }
}
