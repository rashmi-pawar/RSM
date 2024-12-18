import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradWeekFaqPage } from './grad-week-faq.page';

describe('GradWeekFaqPage', () => {
  let component: GradWeekFaqPage;
  let fixture: ComponentFixture<GradWeekFaqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradWeekFaqPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradWeekFaqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
