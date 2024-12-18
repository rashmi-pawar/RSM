import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriphistoryPage } from './triphistory.page';

describe('TriphistoryPage', () => {
  let component: TriphistoryPage;
  let fixture: ComponentFixture<TriphistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriphistoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriphistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
