import { TestBed } from '@angular/core/testing';

import { LaunchNavigatorService } from './launch-navigator.service';

describe('LaunchNavigatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaunchNavigatorService = TestBed.get(LaunchNavigatorService);
    expect(service).toBeTruthy();
  });
});
