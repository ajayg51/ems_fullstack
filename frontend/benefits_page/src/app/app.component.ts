import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'beneficiary_page';
  isLoading : boolean = true;
  
  ngOnInit(): void{
    setTimeout(()=>{
      this.isLoading = false;
    }, 3000);
  }
}
