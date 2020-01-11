import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { CourierStats } from '../models/CourierStats';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourierService {

  constructor(private baseService: BaseService) { }

  getCourierStatistics(): Observable<CourierStats[]> {
    return this.baseService.get(environment.couriersUrl + environment.statisticsUrl);
  }
}
