import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../../models/employee-model';
import { EmployeesService } from './employees.service';


@Component({
  selector: 'app-employee-listing-component',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent {
  static data : Employee [] = [];

  static  filteredEmployees = new BehaviorSubject<Employee[]> ([]);
  filteredEmployees$ = EmployeesComponent.filteredEmployees.asObservable();
  
  private employeesService : EmployeesService;

  constructor(employeesService : EmployeesService){
    this.employeesService = employeesService;
  }

  
  ngOnInit() : void{

    this.employeesService
      .getEmployeeList().subscribe(
        data => {
          EmployeesComponent.data = data;

          console.log("emp list :: ", data);
          EmployeesComponent.filteredEmployees.next(data);
        
          console.log(
            "Observable list :: ",
            EmployeesComponent.filteredEmployees.value[0]
          );

        },
        error =>{
          console.log("Employee list : Error :: ", error)
        }
      );

  }


  onEmpSearch(query : string) : void{
    let list : Employee [] = [];

    let filteredEmployeeList = EmployeesComponent.data;

    console.log(
      "onEmpSearch() : query :: ", 
      query
    );

    console.log("data :: ", EmployeesComponent.data);

    for(let emp of filteredEmployeeList){
      let empFName = emp.first_name.toLowerCase();
      query = query.toLowerCase();

      if(empFName.includes(query)){
        list.push(emp);
        console.log("found :: ",emp);
      }
    }

    console.log("matched list :: ", list);

    EmployeesComponent.filteredEmployees.next(list);

  }




}

