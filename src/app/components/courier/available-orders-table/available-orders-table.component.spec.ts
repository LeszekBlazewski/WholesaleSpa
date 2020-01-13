import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableOrdersTableComponent } from './available-orders-table.component';

describe('AvailableOrdersTableComponent', () => {
  let component: AvailableOrdersTableComponent;
  let fixture: ComponentFixture<AvailableOrdersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableOrdersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
