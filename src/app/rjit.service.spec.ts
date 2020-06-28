import { TestBed } from '@angular/core/testing';

import { RjitService } from './rjit.service';

describe('RjitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RjitService = TestBed.get(RjitService);
    expect(service).toBeTruthy();
  });
});
