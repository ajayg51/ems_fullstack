import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employee-listing-section/employee-listing-component/employees.component';
import { SearchBoxComponent } from './utils/search-box/search-box.component';
import { EmployeeCardComponent } from './employee-listing-section/employee-card/employee-card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppLoaderComponent } from "./utils/app-loader/app-loader.component";
import { AddedBenefitCardComponent } from './added-benefit-section/added-benefit-card/added-benefit-card-component/added-benefit-card.component';
import { BenefitComponent } from './benefits-section/benefit.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeBenefitComponent } from './added-benefit-section/employe-benefit-component/employee-benefit.component';
import { BenefitCardComponent } from './benefits-section/benefit-card/benefit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BenefitComponent,
    EmployeesComponent,
    SearchBoxComponent,
    EmployeeCardComponent,
    AppLoaderComponent,
    AddedBenefitCardComponent,
    EmployeeCardComponent,
    EmployeeBenefitComponent,
    BenefitCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
