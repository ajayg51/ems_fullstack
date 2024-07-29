import { Component } from '@angular/core';
import { AppAssets } from 'src/utils/app_assets';

@Component({
  selector: 'app-details-card-component',
  templateUrl: './details-card.html',
  styleUrls: ['./details-card.css']
})


export class DetailsCardComponent {
  assetPath : string = AppAssets.noData;

  showBenefitCardDetails():void{
    console.log("benefit card tapped!!");
  }

  showEmpCardDetails(): void{
    console.log("Employee card tapped!!");
  }
}
