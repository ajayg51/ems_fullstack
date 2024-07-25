import { Component, Input } from '@angular/core';
import { AppAssets } from 'src/utils/app_assets';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent {
  searchLogo : string = AppAssets.searchIcon;
  inputText : string = "";

  @Input() onEmpSearch! : (query : string) => void;
  
  onQuerySearch(query : string) : void{
    this.onEmpSearch(query);
  }

  onInputTextChange(query : string) : void{
    console.log("query :  ", query);
    this.onEmpSearch(query.trim());
  }
}
