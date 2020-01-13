import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredOrdersTableComponent } from './delivered-orders-table.component';

describe('DeliveredOrdersTableComponent', () => {
  let component: DeliveredOrdersTableComponent;
  let fixture: ComponentFixture<DeliveredOrdersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveredOrdersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveredOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
