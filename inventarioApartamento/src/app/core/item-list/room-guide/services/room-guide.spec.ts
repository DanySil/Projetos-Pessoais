import { TestBed } from '@angular/core/testing';

import { RoomGuide } from './room-guide';

describe('RoomGuide', () => {
  let service: RoomGuide;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomGuide);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
