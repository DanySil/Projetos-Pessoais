import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensCards } from './itens-cards';

describe('ItensCards', () => {
  let component: ItensCards;
  let fixture: ComponentFixture<ItensCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItensCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
