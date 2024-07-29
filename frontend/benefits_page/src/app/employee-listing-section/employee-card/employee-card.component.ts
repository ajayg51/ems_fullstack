import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee-model';
import { AppAssets } from 'src/utils/app_assets';
import { EmployeesService } from '../employee-listing-component/employees.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})


export class EmployeeCardComponent {
  assetPath : string = AppAssets.personLogo;
  empId : number = 0;

  @Input() empData! : Employee;
  
  @Input() onEmpCardTapCallback! : (
    employeesService : EmployeesService,
    empId : number) => void;
  
  constructor(private employeesService : EmployeesService){}


  ngOnInit(){
    this.empId = this.empData.employee_id;
  }

  onEmpCardTap(): void{
    console.log("onEmpCardTap : ", this.empData.employee_id);
    this.onEmpCardTapCallback(
      this.employeesService,
      this.empData.employee_id);
  }
}
