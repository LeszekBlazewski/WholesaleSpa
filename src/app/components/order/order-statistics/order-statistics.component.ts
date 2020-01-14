import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { dateRangeCheck } from 'src/app/validators/date-range.validator';

@Component({
  selector: 'app-order-statistics',
  templateUrl: './order-statistics.component.html',
  styleUrls: ['./order-statistics.component.scss']
})
export class OrderStatisticsComponent implements OnInit {

  totalWorth$: Observable<number>;

  dateForm: FormGroup;

  constructor(private orderService: OrderService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.dateForm = this.formBuilder.group({
      dateFrom: ['', Validators.required],
      dateTo: ['', Validators.required],
    }, { validators: dateRangeCheck('dateFrom', 'dateTo') });
  }

  getOrdersTotalWorth() {
    if (!this.dateForm.invalid)
      this.totalWorth$ = this.orderService.getOrdersTotalWorth(this.dateForm.controls.dateFrom.value, this.dateForm.controls.dateTo.value);
  }

  getDateToError() {
    return this.dateForm.controls.dateTo.hasError('required') ? 'To date is required' : this.dateForm.controls.dateTo.hasError('mustBeLess') ? 'To date must be greater' : '';
  }
}
