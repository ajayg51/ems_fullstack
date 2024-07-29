import { Component } from '@angular/core';
import { EmployeesService } from './employees.service';
import { Employee } from '../../models/employee-model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-employee-listing-component',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent {
  data : Employee [] = [];

  private filteredEmployees = new BehaviorSubject<Employee[]> ([]);
  filteredEmployees$ = this.filteredEmployees.asObservable();
  
  private employeesService : EmployeesService;

  constructor(employeesService : EmployeesService){
    this.employeesService = employeesService;
  }

  
  ngOnInit() : void{

    this.employeesService
      .getEmployeeList().subscribe(
        data => {
          this.data = data;
          console.log("emp list :: ", this.data);
          this.filteredEmployees.next(data);
        
          console.log("Observable list :: ",this.filteredEmployees.value[0]);

        },
        error =>{
          console.log("Employee list : Error :: ", error)
        }
      );

  }


  onEmpSearch(empName : string) : void{
    let list : Employee [] = [];

    console.log("searched emp :: ", empName, this.data);

    // for(let emp of this.data){
    //   if(emp.first_name == empName){
    //     list.push(emp);
    //     console.log("found :: ",emp.first_name);
    //   }
    // }

    // this.filteredEmployees.next(list);

  }


  onEmpCardTap(
    employeesService : EmployeesService,
    empId : number) : void{

    console.log("employees Service method called!!", empId);

    employeesService
      .getEmpSpecificBenefits(empId)
      .subscribe(
        data => {
          console.log("data ", data );
        },
        error => {
          console.log("onEmpCardTap() : Error :: ", error);
        }
      );

  }


}

