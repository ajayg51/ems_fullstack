import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Benefit } from '../models/benefits-model';



@Injectable({
  providedIn: 'root'
})
export class BenefitsDataService {

  private apiUrl = "http://localhost:8000/benefits/";

  constructor(private http: HttpClient) { }

  getBeneficiaryList(): Observable<Benefit[]> {
    return this.http.get<Benefit[]>(this.apiUrl);
  }

}
