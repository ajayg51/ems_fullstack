import { TestBed } from '@angular/core/testing';

import { BenefitsDataService } from './benefits.service';

describe('BeneficiaryListingDataService', () => {
  let service: BenefitsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenefitsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
