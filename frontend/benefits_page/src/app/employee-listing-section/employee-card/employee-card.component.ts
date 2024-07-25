import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})


export class EmployeeCardComponent {
  @Input() id : string = "";
  @Input() name : string = "";
  @Input() gender : string = "";


  onEmpCardTap(empId : string): void{
    console.log("empId : ", empId);
  }
}
