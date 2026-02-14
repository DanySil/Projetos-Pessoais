import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomGuide } from './room-guide';

describe('RoomGuide', () => {
  let component: RoomGuide;
  let fixture: ComponentFixture<RoomGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomGuide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
