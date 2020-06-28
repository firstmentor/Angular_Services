import { TestBed } from '@angular/core/testing';

import { FeeapiService } from './feeapi.service';

describe('FeeapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeeapiService = TestBed.get(FeeapiService);
    expect(service).toBeTruthy();
  });
});
