import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Benefit } from 'src/app/models/benefits-model';
import { Employee } from 'src/app/models/employee-model';
import { AddBenefitModalComponent } from 'src/app/utils/add-benefit-modal/add-benefit-modal.component';

@Component({
  selector: 'app-emp-content',
  templateUrl: './emp-content.component.html',
  styleUrls: ['./emp-content.component.css']
})

export class EmpContentComponent {
  @Input() empData! : Employee;
  
  @Input() empBenefitData! : Benefit;

  constructor(public dialog : MatDialog){}

  onAddBenefitBtnTap() : void{
    console.log("Add benefit btn tapped");


    const dialogRef = this.dialog.open(
      AddBenefitModalComponent,
      {
        data:{
          title:"Add employee benefit(s)",
          content:"Modal content"
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
