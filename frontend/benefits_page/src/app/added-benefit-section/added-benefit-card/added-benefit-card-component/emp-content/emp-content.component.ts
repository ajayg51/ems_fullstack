import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee-model';

@Component({
  selector: 'app-emp-content',
  templateUrl: './emp-content.component.html',
  styleUrls: ['./emp-content.component.css']
})
export class EmpContentComponent {
  @Input() data! : Employee;
}
