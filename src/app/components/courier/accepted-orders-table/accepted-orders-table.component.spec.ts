import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedOrdersTableComponent } from './accepted-orders-table.component';

describe('AcceptedOrdersTableComponent', () => {
  let component: AcceptedOrdersTableComponent;
  let fixture: ComponentFixture<AcceptedOrdersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedOrdersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
