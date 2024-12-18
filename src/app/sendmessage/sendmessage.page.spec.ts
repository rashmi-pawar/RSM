import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmessagePage } from './sendmessage.page';

describe('SendmessagePage', () => {
  let component: SendmessagePage;
  let fixture: ComponentFixture<SendmessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendmessagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendmessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
