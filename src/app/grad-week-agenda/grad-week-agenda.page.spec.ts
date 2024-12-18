import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradWeekAgendaPage } from './grad-week-agenda.page';

describe('GradWeekAgendaPage', () => {
  let component: GradWeekAgendaPage;
  let fixture: ComponentFixture<GradWeekAgendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradWeekAgendaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradWeekAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
