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

  // beneficiaryCardList: BeneficiaryCard[] = [];

  data : Benefit[] = [] ;

  
  constructor(
    private beneficiaryListingDataService 
      : BenefitsDataService
  ){

  }



  ngOnInit(): void{
    this.beneficiaryListingDataService
      .getBeneficiaryList().subscribe(
        data => {

          console.log("Beneficiary list :: ", data);
          
          this.data = data;

          // this.getBeneficiaryCardList(data);
        },
        error =>{
          console.log("Error :: ", error)
        }
      );
  }


  // getBeneficiaryCardList(data : Benefit[]) : void {
  //   for(let item of data){
  //     console.log('beneficiary item : ',item.beneficiary_id, ' ', item.beneficiary_name);
  //     const card = new BeneficiaryCard(
  //       item.benefit_name,
  //       item.description
  //     );

  //     this.beneficiaryCardList.push(card);

  //   }
  // }

}

// class BeneficiaryCard{
//   // assetPath : string;
//   title : string;
//   description : string;


//   constructor(
//     // assetPath : string, 
//     title : string,
//     description : string
//    ){
//     // this.assetPath = assetPath;
//     this.title = title;
//     this.description = description;
//   }

// }
