import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProffesionalfeePage } from './proffesionalfee.page';

describe('ProffesionalfeePage', () => {
  let component: ProffesionalfeePage;
  let fixture: ComponentFixture<ProffesionalfeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProffesionalfeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProffesionalfeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
