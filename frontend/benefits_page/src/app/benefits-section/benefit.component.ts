import { Component } from '@angular/core';
import { AppAssets } from 'src/utils/app_assets';
import { BenefitsDataService } from './benefits.service';
import { Benefit } from '../models/benefits-model';

@Component({
  selector: 'app-benefit-component',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.css'],
  
})

export class BenefitComponent {

  data : Benefit[] = [] ;

  static sharedBenefitData : Benefit [] = [];
  
  constructor(
    private beneficiaryListingDataService 
      : BenefitsDataService
  ){

  }



  ngOnInit(): void{
    this.beneficiaryListingDataService
      .getBeneficiaryList().subscribe(
        data => {

          console.log("Benefits list :: ", data);
          
          this.data = data;

          BenefitComponent.sharedBenefitData = data;
          
        },
        error =>{
          console.log("Error :: ", error)
        }
      );
  }

  onBenefitCardTap() : void{
    
  }



}
