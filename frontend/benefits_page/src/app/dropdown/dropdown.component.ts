import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})

export class DropdownComponent {
  @Input() options : string[] = []


  onOptionSelect(event : any) : void{
    console.log("option selected!", event.value);
  }
}
