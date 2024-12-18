import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindusPage } from './findus.page';

describe('FindusPage', () => {
  let component: FindusPage;
  let fixture: ComponentFixture<FindusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
