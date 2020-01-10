import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Order } from '../models/Order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private baseService: BaseService) { }


  placeOrder(order: Order): Observable<any> {
    return this.baseService.post(environment.orderUrl, order);
  }

  getAllOrdersForUser(userId: number): Observable<Order[]> {
    return this.baseService.get(environment.orderUrl + userId.toString());
  }

  getAllOrders(): Observable<Order[]> {
    return this.baseService.get(environment.orderUrl);
  }
}
