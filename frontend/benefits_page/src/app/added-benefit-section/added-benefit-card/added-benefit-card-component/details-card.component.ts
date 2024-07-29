import { Component } from '@angular/core';
import { AppAssets } from 'src/utils/app_assets';
import { DetailsCardService } from './details-card.service';
import { BehaviorSubject } from 'rxjs';
import { Benefit } from 'src/app/models/benefits-model';
import { Employee } from 'src/app/models/employee-model';

@Component({
  selector: 'app-details-card-component',
  templateUrl: './details-card.html',
  styleUrls: ['./details-card.css']
})


export class DetailsCardComponent {
  assetPath : string = AppAssets.noData;

  static isBenefitCardTapped = 
    new BehaviorSubject<boolean>(false);

  isBenefitCardTapped$ = 
    DetailsCardComponent.isBenefitCardTapped.asObservable();
  
  static benefitData = 
    new BehaviorSubject<Benefit[]>([]);

  benefitData$ = 
    DetailsCardComponent.benefitData.asObservable();

  
    
  static isLoading = 
    new BehaviorSubject<boolean>(false);
  
  isLoading$ = 
    DetailsCardComponent.isLoading.asObservable();

  
  static isNoData = 
    new BehaviorSubject<boolean>(false);
  
  isNoData$ = 
    DetailsCardComponent.isNoData.asObservable();
    
  static empData = 
  new BehaviorSubject<Employee[]>([]);

  empData$ = 
  DetailsCardComponent.empData.asObservable();

  isInitStage : boolean = true;


}
