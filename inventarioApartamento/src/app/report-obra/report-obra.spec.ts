import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportObra } from './report-obra';

describe('ReportObra', () => {
  let component: ReportObra;
  let fixture: ComponentFixture<ReportObra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportObra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportObra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
