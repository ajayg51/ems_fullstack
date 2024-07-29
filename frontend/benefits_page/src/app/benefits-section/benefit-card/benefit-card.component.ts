import { Component, Input } from '@angular/core';
import { AppAssets } from 'src/utils/app_assets';
import { BenefitsDataService } from '../benefits.service';
import { Benefit, Convert } from 'src/app/models/benefits-model';

@Component({
  selector: 'app-benefit-card',
  templateUrl: './benefit-card.component.html',
  styleUrls: ['./benefit-card.component.css']
})

export class BenefitCardComponent {
  @Input() id : String = "";
  @Input() title : String = "";
  @Input() description: String = "";

  @Input() benefitData! : Benefit;
}
