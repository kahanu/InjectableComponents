import { InjectableCompanyService } from './../dynamic/services/injectable-company.service';
import { CompanyService } from './../company/company.service';
import { HomeService } from './../home/home.service';
import { JsonApiService } from './api/json-api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    JsonApiService,
    HomeService,
    CompanyService,
    InjectableCompanyService
  ]
})
export class CoreModule { }
