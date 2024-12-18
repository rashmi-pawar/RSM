import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssFeedDetailPage } from './rss-feed-detail.page';

describe('RssFeedDetailPage', () => {
  let component: RssFeedDetailPage;
  let fixture: ComponentFixture<RssFeedDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssFeedDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssFeedDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
