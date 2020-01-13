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
    return this.baseService.put(environment.orderUrl, { orderId: order.orderId, courierId: courierId, status: order.status });
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

  getCurrentOrdersForCourier(courierId: number): Observable<AvailableOrder[]> {
    const url = environment.orderUrl + environment.couriersUrl.split('s').join('') + courierId.toString();
    return this.baseService.get(url);
  }

  getCompletedOrdersForCourier(courierId: number): Observable<AvailableOrder[]> {
    const url = environment.orderUrl + environment.completedOrdersUrl + courierId.toString();
    return this.baseService.get(url);
  }
}
