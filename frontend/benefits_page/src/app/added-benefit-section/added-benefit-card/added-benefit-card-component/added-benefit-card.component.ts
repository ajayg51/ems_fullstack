import { Component } from '@angular/core';
import { AppAssets } from 'src/utils/app_assets';

@Component({
  selector: 'app-added-benefit-card-component',
  templateUrl: './added-benefit-card.component.html',
  styleUrls: ['./added-benefit-card.component.css']
})


export class AddedBenefitCardComponent {
  assetPath : string = AppAssets.noData;
}
