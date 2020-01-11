import { Component, OnInit } from '@angular/core';
import { ProductStats } from 'src/app/models/ProductStats';
import { Observable } from 'rxjs';
import { CourierStats } from 'src/app/models/CourierStats';
import { ProductService } from 'src/app/services/product.service';
import { CourierService } from 'src/app/services/courier.service';

@Component({
  selector: 'app-admin-statistics-page',
  templateUrl: './admin-statistics-page.component.html',
  styleUrls: ['./admin-statistics-page.component.scss']
})
export class AdminStatisticsPageComponent implements OnInit {

  productStats$: Observable<ProductStats[]>

  courierStats$: Observable<CourierStats[]>

  constructor(private productService: ProductService,
    private courierService: CourierService) { }

  ngOnInit() {
    this.productStats$ = this.productService.getProductStatistics();
    this.courierStats$ = this.courierService.getCourierStatistics();
  }

}
