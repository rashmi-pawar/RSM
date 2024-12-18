import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualtripPage } from './manualtrip.page';

describe('ManualtripPage', () => {
  let component: ManualtripPage;
  let fixture: ComponentFixture<ManualtripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualtripPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualtripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
