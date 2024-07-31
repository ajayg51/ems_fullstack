import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Benefit } from 'src/app/models/benefits-model';
import { Employee } from 'src/app/models/employee-model';
import { AddBenefitModalComponent } from 'src/app/utils/add-benefit-modal/add-benefit-modal.component';
import { DetailsCardService } from '../details-card.service';

@Component({
  selector: 'app-emp-content',
  templateUrl: './emp-content.component.html',
  styleUrls: ['./emp-content.component.css']
})

export class EmpContentComponent {

  empData! : Observable<Employee[]>;
  empBenefitList! : Observable<Benefit[]>;

  constructor(
    public dialog : MatDialog,
    private detailCardService : DetailsCardService
  ){}


  ngOnInit(){
  //   EmpContentComponent.sharedEmpData = this.empData;
  //   EmpContentComponent.sharedEmpBenefitList = this.empBenefitList;
  //   console.log("EmpContentComponent :: emp data : ", EmpContentComponent.sharedEmpData.first_name);
  
       this.empData = this.detailCardService.empData.asObservable();
       this.empBenefitList = this.detailCardService.empBenefitData.asObservable();

  }

  onAddBenefitBtnTap() : void{
    console.log("Add benefit btn tapped");


    const dialogRef = this.dialog.open(
      AddBenefitModalComponent,
      {
        data:{
          title:"Add employee benefit(s)",
          // content:{
          //   empData : this.empData,
          //   benefitDataList : this.empBenefitList,
          // }
        },
        disableClose:true,
      });

      dialogRef.afterClosed().subscribe(
        result => {
          console.log("Add benefit modal is closed")
        }
      );
  }

}
