import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriplogbookPage } from './triplogbook.page';

describe('TriplogbookPage', () => {
  let component: TriplogbookPage;
  let fixture: ComponentFixture<TriplogbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriplogbookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriplogbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
