import { TestBed } from '@angular/core/testing';

import { DetailsCardService } from './details-card.service';

describe('AddedBenefitCardService', () => {
  let service: DetailsCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
