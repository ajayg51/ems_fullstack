import { Component, Input } from '@angular/core';
import { DetailsCardService } from 'src/app/added-benefit-section/added-benefit-card/added-benefit-card-component/details-card.service';
import { Benefit } from 'src/app/models/benefits-model';

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

  constructor(private detailsCardService : DetailsCardService){}

  onBenefitCardTap() : void{
    this.detailsCardService
      .storeBenefitData(this.benefitData);
  }

  onEmpCardTap(): void{

  }

  
}
