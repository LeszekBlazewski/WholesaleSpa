import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable, Subject } from 'rxjs';
import { CourierStats } from '../models/CourierStats';
import { environment } from 'src/environments/environment';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class CourierService {

  private acceptedOrder$: Subject<Order> = new Subject();

  constructor(private baseService: BaseService) { }

  getCourierStatistics(): Observable<CourierStats[]> {
    return this.baseService.get(environment.couriersUrl + environment.statisticsUrl);
  }

  addNewAcceptedOrder(order: Order) {
    this.acceptedOrder$.next(order);
  }

  getLatestAcceptedOrder(): Observable<Order> {
    return this.acceptedOrder$.asObservable();
  }

}
