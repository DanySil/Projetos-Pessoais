import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddItem } from './form-add-item';

describe('FormAddItem', () => {
  let component: FormAddItem;
  let fixture: ComponentFixture<FormAddItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
