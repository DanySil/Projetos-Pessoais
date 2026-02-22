import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomGuideComponent } from './room-guide';

describe('RoomGuide', () => {
  let component: RoomGuideComponent;
  let fixture: ComponentFixture<RoomGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
