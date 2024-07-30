import { Component, Input } from '@angular/core';
import { Benefit } from 'src/app/models/benefits-model';
import { Employee } from 'src/app/models/employee-model';

@Component({
  selector: 'app-emp-content',
  templateUrl: './emp-content.component.html',
  styleUrls: ['./emp-content.component.css']
})
export class EmpContentComponent {
  @Input() empData! : Employee;
  
  @Input() empBenefitData! : Benefit;
}
