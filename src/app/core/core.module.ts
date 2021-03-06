import { SuppliersService } from './../suppliers/suppliers.service';
import { InjectableCompanyService,
  InjectableSupplierService } from './../dynamic/services';
import { CompanyService } from './../company/company.service';
import { HomeService } from './../home/home.service';
import { JsonApiService } from './api/json-api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectableWizardService } from 'app/dynamic/services/injectable-wizard.service';
import { PubSubService } from './services/pub-sub/pub-sub.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    JsonApiService,
    HomeService,
    CompanyService,
    InjectableCompanyService,
    InjectableSupplierService,
    InjectableWizardService,
    SuppliersService,
    PubSubService
  ]
})
export class CoreModule { }
