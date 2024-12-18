import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfavouritesPage } from './addfavourites.page';

describe('AddfavouritesPage', () => {
  let component: AddfavouritesPage;
  let fixture: ComponentFixture<AddfavouritesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfavouritesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfavouritesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
