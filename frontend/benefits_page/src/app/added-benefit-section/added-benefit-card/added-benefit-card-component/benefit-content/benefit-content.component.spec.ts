import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitContentComponent } from './benefit-content.component';

describe('BenefitContentComponent', () => {
  let component: BenefitContentComponent;
  let fixture: ComponentFixture<BenefitContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenefitContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
