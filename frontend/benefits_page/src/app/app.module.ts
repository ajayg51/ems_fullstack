import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BenefitContentComponent } from './added-benefit-section/added-benefit-card/added-benefit-card-component/benefit-content/benefit-content.component';
import { DetailsCardComponent } from './added-benefit-section/added-benefit-card/added-benefit-card-component/details-card.component';
import { EmpContentComponent } from './added-benefit-section/added-benefit-card/added-benefit-card-component/emp-content/emp-content.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BenefitCardComponent } from './benefits-section/benefit-card/benefit-card.component';
import { BenefitComponent } from './benefits-section/benefit.component';
import { EmployeeCardComponent } from './employee-listing-section/employee-card/employee-card.component';
import { EmployeesComponent } from './employee-listing-section/employee-listing-component/employees.component';
import { AddBenefitModalComponent } from './utils/add-benefit-modal/add-benefit-modal.component';
import { AppLoaderComponent } from "./utils/app-loader/app-loader.component";
import { SearchBoxComponent } from './utils/search-box/search-box.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    BenefitComponent,
    EmployeesComponent,
    SearchBoxComponent,
    EmployeeCardComponent,
    AppLoaderComponent,
    DetailsCardComponent,
    EmployeeCardComponent,
    BenefitCardComponent,
    BenefitContentComponent,
    EmpContentComponent,
    AddBenefitModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
