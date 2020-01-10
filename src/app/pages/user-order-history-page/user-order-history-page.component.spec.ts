import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderHistoryPageComponent } from './user-order-history-page.component';

describe('UserOrderHistoryPageComponent', () => {
  let component: UserOrderHistoryPageComponent;
  let fixture: ComponentFixture<UserOrderHistoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOrderHistoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrderHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
