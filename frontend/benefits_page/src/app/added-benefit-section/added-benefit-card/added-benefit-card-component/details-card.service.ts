import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Benefit } from 'src/app/models/benefits-model';
import { DetailsCardComponent } from './details-card.component';
import { Employee } from 'src/app/models/employee-model';
import { EmpBenefitModel } from 'src/app/models/emp-benefit-model';

@Injectable({
  providedIn: 'root'
})
export class DetailsCardService {
  
  private   baseUrl = "http://localhost:8000";

  private  empBenefitApiUrl = `${this.baseUrl}/benefits/employee/`;

  isInitStage  = new BehaviorSubject<boolean>(true);
  isInitStage$ = this.isInitStage.asObservable();


  isNoData = 
    new BehaviorSubject<boolean>(true);
  
  isNoData$ = 
    this.isNoData.asObservable();
    


  isBenefitCardTapped = 
    new BehaviorSubject<boolean>(false);

  isBenefitCardTapped$ = 
    this.isBenefitCardTapped.asObservable();
  
  benefitData = 
    new BehaviorSubject<Benefit[]>([]);

  benefitData$ = 
    this.benefitData.asObservable();

  
    
  isLoading = 
    new BehaviorSubject<boolean>(false);
  
  isLoading$ = 
    this.isLoading.asObservable();

  
  
  empData = 
  new BehaviorSubject<Employee[]>([]);

  empData$ = 
  this.empData.asObservable();

  empBenefitData = 
  new BehaviorSubject<EmpBenefitModel[]>([]);

  empBenefitData$ = 
  this.empBenefitData.asObservable();


  constructor(private http: HttpClient){}
  
  showBenefitData(data : Benefit) : void{
    console.log("benefit card tapped!");

    this.isNoData.next(false);
    this.isInitStage.next(false);

    this.isBenefitCardTapped.next(true);
    this.benefitData.next([data]);
  }


  onEmpCardTap(empData : Employee): void{
     
    this.isLoading.next(true);
    
    this.isBenefitCardTapped.next(false);

    this.isInitStage.next(false);

    this.empData.next([empData]);

    this.fetchEmpData(empData.employee_id)
      .subscribe(
        data => {
          this.isLoading.next(false);
          this.isNoData.next(false);

          this.empBenefitData.next([data]);
          
          console.log(
            "DATA :: DetailsCardComponent : onEmpCardTap() :: ", 
            this.empBenefitData.value[0]);
        },
        error => {
          this.isLoading.next(false);
          this.isNoData.next(true);
          
          console.log(
            "ERROR :: DetailsCardComponent : onEmpCardTap() :: ", 
            error);
        }
      );
  }


  
  fetchEmpData(empId : number) :  Observable<EmpBenefitModel>{
    console.log("Employee card tapped!", empId);

    let params = new HttpParams();

    params = params.set("empId", empId);

    
    return this.http.get<EmpBenefitModel>(
      this.empBenefitApiUrl,
      {params}

    );

  }

}
