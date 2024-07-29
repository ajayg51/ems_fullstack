import { TestBed } from '@angular/core/testing';

import { AddedBenefitCardService } from './added-benefit-card.service';

describe('AddedBenefitCardService', () => {
  let service: AddedBenefitCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddedBenefitCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
