import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee-model';
import { AppAssets } from 'src/utils/app_assets';
import { EmployeesService } from '../employee-listing-component/employees.service';
import { DetailsCardService } from 'src/app/added-benefit-section/added-benefit-card/added-benefit-card-component/details-card.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})


export class EmployeeCardComponent {
  assetPath : string = AppAssets.personLogo;

  @Input() empData! : Employee;
  
  constructor(private detailsCardService : DetailsCardService){}



  onEmpCardTap(): void{

    this.detailsCardService
    .onEmpCardTap(this.empData.employee_id);

  }
}
