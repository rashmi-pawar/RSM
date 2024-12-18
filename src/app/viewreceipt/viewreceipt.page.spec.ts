import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreceiptPage } from './viewreceipt.page';

describe('ViewreceiptPage', () => {
  let component: ViewreceiptPage;
  let fixture: ComponentFixture<ViewreceiptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreceiptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
