import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpContentComponent } from './emp-content.component';

describe('EmpContentComponent', () => {
  let component: EmpContentComponent;
  let fixture: ComponentFixture<EmpContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
