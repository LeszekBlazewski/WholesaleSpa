import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderHistoryPageComponent } from './admin-order-history-page.component';

describe('AdminOrderHistoryPageComponent', () => {
  let component: AdminOrderHistoryPageComponent;
  let fixture: ComponentFixture<AdminOrderHistoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOrderHistoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
