import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Benefit } from 'src/app/models/benefits-model';

@Injectable({
  providedIn: 'root'
})
export class DetailsCardService {
  benefitData! : Benefit; 
  
  private baseUrl = "http://localhost:8000";

  
  private empBenefitApiUrl = `${this.baseUrl}/benefits/employee/`;
  
  constructor(private http: HttpClient) { }
  
  storeBenefitData(data : Benefit) : void{
    this.benefitData = data;
    console.log("shared benefit data", this.benefitData);
  }




  onEmpCardTap(empId : number) : void{
    this.fetchEmpData(empId)
      .subscribe(
        data => {
          console.log("emp-benefit-data :: ", data);
        },
        error => {
          console.log("onEmpCardTap() : error :: ", error);
        }
      );
  }

  
  
  fetchEmpData(empId : number) :  Observable<void>{
    console.log("Employee card tapped!", empId);

    let params = new HttpParams();

    params = params.set("empId", empId);

    
    return this.http.get<void>(
      this.empBenefitApiUrl,
      {params}

    );

  }

}
