import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Benefit } from 'src/app/models/benefits-model';
import { Employee } from 'src/app/models/employee-model';
import { AppAssets } from 'src/utils/app_assets';
import { DetailsCardService } from './details-card.service';

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

  empBenefitData$! : Observable<Benefit[]>;

  
  constructor(private detailsCardService : DetailsCardService){
      
  }

  ngOnInit(){
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
