import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogtripPage } from './logtrip.page';

describe('LogtripPage', () => {
  let component: LogtripPage;
  let fixture: ComponentFixture<LogtripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogtripPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogtripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
