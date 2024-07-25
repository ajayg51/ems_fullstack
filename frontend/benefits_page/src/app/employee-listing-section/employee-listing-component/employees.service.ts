
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee-model';

@Injectable({
  providedIn: 'root'
})



export class EmployeesService {

  private apiUrl = "http://localhost:8000/employees/";
  
  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

}
