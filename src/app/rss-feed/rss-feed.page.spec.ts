import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssFeedPage } from './rss-feed.page';

describe('RssFeedPage', () => {
  let component: RssFeedPage;
  let fixture: ComponentFixture<RssFeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssFeedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssFeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
