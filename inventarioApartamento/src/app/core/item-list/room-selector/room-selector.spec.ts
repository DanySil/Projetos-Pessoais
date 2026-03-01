import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSelector } from './room-selector';

describe('RoomSelector', () => {
  let component: RoomSelector;
  let fixture: ComponentFixture<RoomSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
