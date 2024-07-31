import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DetailsCardService } from 'src/app/added-benefit-section/added-benefit-card/added-benefit-card-component/details-card.service';
import { BenefitComponent } from 'src/app/benefits-section/benefit.component';
import { Benefit } from 'src/app/models/benefits-model';
import { Employee } from 'src/app/models/employee-model';


@Component({
  selector: 'app-add-benefit-modal',
  templateUrl: './add-benefit-modal.component.html',
  styleUrls: ['./add-benefit-modal.component.css']
})

export class AddBenefitModalComponent {
  
  allBenefitList! : Benefit[];

  empData! : Observable<Employee[]>;

  empBenefitList! : Observable<Benefit[]>;

  constructor(
    public dialogRef : MatDialogRef<AddBenefitModalComponent>,
    private detailsCardService : DetailsCardService,
  ){}

  ngOnInit() {
    this.allBenefitList = BenefitComponent.sharedBenefitData;
    
    console.log("all Benefit list", this.allBenefitList);

    this.empData = this.detailsCardService.empData.asObservable();

    console.log("emp Data", this.empData);

    this.empBenefitList =  this.detailsCardService.empBenefitData.asObservable();
  
    console.log("emp Benefit list", this.empBenefitList);

    console.log("AddBenefitModalComponent :: ");
    

    // for(let item of this.empBenefitList){
    //   console.log("item ===> ", item);
    //   console.log("id ::--> ", item['benefit_id']);
    // }

  }

  onClose(): void{
    this.dialogRef.close();
  }

  onSubmit(): void{
    console.log("submit button tapped");
  }

}
