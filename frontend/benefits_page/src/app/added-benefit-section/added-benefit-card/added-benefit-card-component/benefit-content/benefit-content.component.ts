import { Component, Input } from '@angular/core';
import { Benefit } from 'src/app/models/benefits-model';

@Component({
  selector: 'app-benefit-content',
  templateUrl: './benefit-content.component.html',
  styleUrls: ['./benefit-content.component.css']
})


export class BenefitContentComponent {
  @Input() data! : Benefit;
}
