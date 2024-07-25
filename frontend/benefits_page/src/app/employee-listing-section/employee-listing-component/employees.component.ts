import { Component } from '@angular/core';
import { EmployeesService } from './employees.service';
import { Employee } from '../../models/employee-model';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-employee-listing-component',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent {
  data : Employee [] = [];

  constructor(
    private employeeListingService 
      : EmployeesService){}

  
  ngOnInit() : void{
    this.employeeListingService
      .getEmployeeList().subscribe(
        data => {
          this.data = data;
          console.log("emp list :: ", this.data);

        },
        error =>{
          console.log("Employee list : Error :: ", error)
        }
      );
  }


}

