import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComodosList } from './comodos-list';

describe('ComodosList', () => {
  let component: ComodosList;
  let fixture: ComponentFixture<ComodosList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComodosList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComodosList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
