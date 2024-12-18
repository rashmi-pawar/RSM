import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtripPage } from './viewtrip.page';

describe('ViewtripPage', () => {
  let component: ViewtripPage;
  let fixture: ComponentFixture<ViewtripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtripPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
