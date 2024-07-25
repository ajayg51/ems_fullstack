import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedBenefitCardComponent } from './added-benefit-card.component';

describe('AddedBeneficiaryCardComponentComponent', () => {
  let component: AddedBenefitCardComponent;
  let fixture: ComponentFixture<AddedBenefitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedBenefitCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedBenefitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
