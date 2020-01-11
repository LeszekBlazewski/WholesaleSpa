import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductStats } from 'src/app/models/ProductStats';

@Component({
  selector: 'app-product-stats',
  templateUrl: './product-stats.component.html',
  styleUrls: ['./product-stats.component.scss']
})
export class ProductStatsComponent implements OnInit {

  @Input() productStats$: Observable<ProductStats[]>

  displayedColumns: string[] = ['position', 'productId', 'category', 'name', 'sold'];

  constructor() { }

  ngOnInit() {

  }

}