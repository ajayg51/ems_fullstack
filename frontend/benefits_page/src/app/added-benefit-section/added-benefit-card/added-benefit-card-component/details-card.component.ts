import { Component } from '@angular/core';
import { AppAssets } from 'src/utils/app_assets';
import { DetailsCardService } from './details-card.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Benefit } from 'src/app/models/benefits-model';
import { Employee } from 'src/app/models/employee-model';
import { EmpBenefitModel } from 'src/app/models/emp-benefit-model';

@Component({
  selector: 'app-details-card-component',
  templateUrl: './details-card.html',
  styleUrls: ['./details-card.css']
})


export class DetailsCardComponent {
  noDataAssetPath : string = AppAssets.noData;


  isInitStage$! : Observable<boolean>;

  isNoData$! : Observable<boolean>;

  isBenefitCardTapped$! : Observable<boolean>;
  
  benefitData$! : Observable<Benefit[]>;

  
  isLoading$! : Observable<boolean>;

  empData$! : Observable<Employee[]>;

  empBenefitData$! : Observable<EmpBenefitModel[]>;

  constructor(private detailsCardService : DetailsCardService){
      
  }

  ngOnInit():void{
      this.isInitStage$ =
        this.detailsCardService.isInitStage.asObservable();
      
      this.isNoData$ =
        this.detailsCardService.isNoData.asObservable();
      
      this.isBenefitCardTapped$ =
        this.detailsCardService.isBenefitCardTapped.asObservable();
      
      this.benefitData$ =
        this.detailsCardService.benefitData.asObservable();

      this.isLoading$ =
        this.detailsCardService.isLoading.asObservable();
      
      this.empData$ =
        this.detailsCardService.empData.asObservable();

        
      this.empBenefitData$ =
        this.detailsCardService.empBenefitData.asObservable();
  }
  

}
