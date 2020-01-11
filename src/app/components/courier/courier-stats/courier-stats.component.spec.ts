import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierStatsComponent } from './courier-stats.component';

describe('CourierStatsComponent', () => {
  let component: CourierStatsComponent;
  let fixture: ComponentFixture<CourierStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourierStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
