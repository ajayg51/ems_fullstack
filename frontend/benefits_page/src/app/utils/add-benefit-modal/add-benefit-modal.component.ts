import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-benefit-modal',
  templateUrl: './add-benefit-modal.component.html',
  styleUrls: ['./add-benefit-modal.component.css']
})

export class AddBenefitModalComponent {

  constructor(public dialogRef : MatDialogRef<AddBenefitModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any
  ){}

  onClose(): void{
    this.dialogRef.close();
  }

  onSubmit(): void{
    console.log("submit button tapped");
  }
}
