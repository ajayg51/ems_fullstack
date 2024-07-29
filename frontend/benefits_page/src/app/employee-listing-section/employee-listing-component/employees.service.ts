
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee-model';
import { Benefit } from 'src/app/models/benefits-model';

@Injectable({
  providedIn: 'root'
})



export class EmployeesService {
  private baseUrl = "http://localhost:8000";

  private employeesApiUrl = `${this.baseUrl}/employees/`;

  private empBenefitApiUrl = `${this.baseUrl}/benefits/employee/`;

  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>
            (this.employeesApiUrl);
  }


  
  getEmpSpecificBenefits(empId : number): Observable<void> {
    console.log("emp service class : empId :: ", empId);
    
    let params = new HttpParams();

    params = params.set("empId", empId);

    // console.log(params," ",params.get("empId"));

    return this.http.get<void>(
      this.empBenefitApiUrl,
      {params}

    );

  }

}
