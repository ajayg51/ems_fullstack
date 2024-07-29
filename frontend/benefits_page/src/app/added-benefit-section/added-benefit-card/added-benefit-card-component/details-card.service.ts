import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Benefit } from 'src/app/models/benefits-model';
import { DetailsCardComponent } from './details-card.component';
import { Employee } from 'src/app/models/employee-model';

@Injectable({
  providedIn: 'root'
})
export class DetailsCardService {
 
  

  // isLoading = true;
  // isNoData = false;
  
  private baseUrl = "http://localhost:8000";

  private empBenefitApiUrl = `${this.baseUrl}/benefits/employee/`;
  
  constructor(private http: HttpClient) { }
  
  showBenefitData(data : Benefit) : void{
    DetailsCardComponent.isBenefitCardTapped.next(true);
    DetailsCardComponent.benefitData.next([data]);
  }




  onEmpCardTap(empId : number) : void{
    DetailsCardComponent.isLoading.next(true);

    this.fetchEmpData(empId)
      .subscribe(
        data => {
          DetailsCardComponent.isLoading.next(false);
          
          DetailsCardComponent.empData.next([data]);

          console.log("emp-benefit-data :: ", data);
        },
        error => {
          
          DetailsCardComponent.isLoading.next(false);
          
          DetailsCardComponent.isNoData.next(true);
          console.log("onEmpCardTap() : error :: ", error);
        }
      );
  }

  
  
  fetchEmpData(empId : number) :  Observable<Employee>{
    console.log("Employee card tapped!", empId);

    let params = new HttpParams();

    params = params.set("empId", empId);

    
    return this.http.get<Employee>(
      this.empBenefitApiUrl,
      {params}

    );

  }

}
