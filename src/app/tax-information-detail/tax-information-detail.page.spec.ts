import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxInformationDetailPage } from './tax-information-detail.page';

describe('TaxInformationDetailPage', () => {
  let component: TaxInformationDetailPage;
  let fixture: ComponentFixture<TaxInformationDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxInformationDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxInformationDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
