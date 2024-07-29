
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee-model';

@Injectable({
  providedIn: 'root'
})



export class EmployeesService {
  private baseUrl = "http://localhost:8000";

  private employeesApiUrl = `${this.baseUrl}/employees/`;


  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>
            (this.employeesApiUrl);
  }

}
