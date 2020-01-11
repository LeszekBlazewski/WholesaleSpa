import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierPendingOrdersPageComponent } from './courier-pending-orders-page.component';

describe('CourierPendingOrdersPageComponent', () => {
  let component: CourierPendingOrdersPageComponent;
  let fixture: ComponentFixture<CourierPendingOrdersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierPendingOrdersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierPendingOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
