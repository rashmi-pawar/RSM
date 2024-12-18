import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsettingPage } from './tripsetting.page';

describe('TripsettingPage', () => {
  let component: TripsettingPage;
  let fixture: ComponentFixture<TripsettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
