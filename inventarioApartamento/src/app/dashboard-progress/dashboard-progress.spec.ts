import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProgress } from './dashboard-progress';

describe('DashboardProgress', () => {
  let component: DashboardProgress;
  let fixture: ComponentFixture<DashboardProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardProgress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProgress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
