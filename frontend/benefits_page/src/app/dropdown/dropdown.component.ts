import { Component, Input } from '@angular/core';
import { Benefit } from '../models/benefits-model';
import { Employee } from '../models/employee-model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})

export class DropdownComponent {
  @Input() benefits! : Benefit[];

  @Input() empData! : Employee[];

  @Input() empBenefits! : Benefit [];

  filteredBenefits! : Benefit[];


  ngOnInit(){

    console.log("dropdown :: emp-benefits", this.empBenefits);
    let list :  Benefit[] =[];
    
    for(let item  of this.empBenefits){
      console.log("emp benefits :: ",item);
      console.log("name :: ", item.benefit_name);
    }

    for(let item of this.benefits){
    //   for(let empBenefitItem of this.empBenefits){
    //     // if(item.benefit_id !== empBenefitItem.benefit_id){
    //     //   list.push(item);
    //     // }
        console.log("benefits : id :: ",item.benefit_id);
    //     console.log(item.benefit_id !== empBenefitItem.benefit_id);
    //   }
    }

    this.filteredBenefits = list;
    console.log("filtered list :: ", this.filteredBenefits);

  }


  onBenefitSelect(event : any) : void{
    console.log("option selected!", event.value);
  }
  
}
