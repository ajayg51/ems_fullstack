import { Component, Input } from '@angular/core';
import { EmpBenefitModel } from 'src/app/models/emp-benefit-model';
import { Employee } from 'src/app/models/employee-model';

@Component({
  selector: 'app-emp-content',
  templateUrl: './emp-content.component.html',
  styleUrls: ['./emp-content.component.css']
})
export class EmpContentComponent {
  @Input() empData! : Employee;
  
  @Input() empBenefitData! : EmpBenefitModel;
}
