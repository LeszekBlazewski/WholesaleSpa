import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPendingTableComponent } from './order-pending-table.component';

describe('OrderPendingTableComponent', () => {
  let component: OrderPendingTableComponent;
  let fixture: ComponentFixture<OrderPendingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPendingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPendingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
