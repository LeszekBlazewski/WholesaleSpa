import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable, Subject } from 'rxjs';
import { CourierStats } from '../models/CourierStats';
import { environment } from 'src/environments/environment';
import { Order } from '../models/Order';
import { AvailableOrder } from '../models/AvailableOrder';

@Injectable({
  providedIn: 'root'
})
export class CourierService {

  private acceptedOrder$: Subject<AvailableOrder> = new Subject();

  constructor(private baseService: BaseService) { }

  getCourierStatistics(): Observable<CourierStats[]> {
    return this.baseService.get(environment.couriersUrl + environment.statisticsUrl);
  }

  addNewAcceptedOrder(availableOrder: AvailableOrder) {
    this.acceptedOrder$.next(availableOrder);
  }

  getLatestAcceptedOrder(): Observable<AvailableOrder> {
    return this.acceptedOrder$.asObservable();
  }

}
