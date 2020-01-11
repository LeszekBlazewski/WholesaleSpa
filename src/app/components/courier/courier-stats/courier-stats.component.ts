import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CourierStats } from 'src/app/models/CourierStats';

@Component({
  selector: 'app-courier-stats',
  templateUrl: './courier-stats.component.html',
  styleUrls: ['./courier-stats.component.scss']
})
export class CourierStatsComponent implements OnInit {

  @Input() courierStats$: Observable<CourierStats>

  displayedColumns: string[] = ['position', 'firstName', 'surname', 'numberOfOrders', 'totalWorth'];

  constructor() { }

  ngOnInit() {
  }

}