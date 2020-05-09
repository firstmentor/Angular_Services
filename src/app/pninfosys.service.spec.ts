import { TestBed } from '@angular/core/testing';

import { PninfosysService } from './pninfosys.service';

describe('PninfosysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PninfosysService = TestBed.get(PninfosysService);
    expect(service).toBeTruthy();
  });
});
