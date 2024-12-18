import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreceiptPage } from './editreceipt.page';

describe('EditreceiptPage', () => {
  let component: EditreceiptPage;
  let fixture: ComponentFixture<EditreceiptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditreceiptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditreceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
