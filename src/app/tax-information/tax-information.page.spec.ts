import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxInformationPage } from './tax-information.page';

describe('TaxInformationPage', () => {
  let component: TaxInformationPage;
  let fixture: ComponentFixture<TaxInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxInformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
