import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentEventsPage } from './current-events.page';

describe('CurrentEventsPage', () => {
  let component: CurrentEventsPage;
  let fixture: ComponentFixture<CurrentEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentEventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
