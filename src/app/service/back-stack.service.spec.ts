import { TestBed } from '@angular/core/testing';

import { BackStackService } from './back-stack.service';

describe('BackStackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackStackService = TestBed.get(BackStackService);
    expect(service).toBeTruthy();
  });
});
