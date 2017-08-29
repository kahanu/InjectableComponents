import { CompanyModule } from './company/company.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { InjectableComponentService } from './dynamic/services/injectable-component.service';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentHostDirective } from './dynamic/component-host.directive';
import { CustomersComponent,
  SalesComponent,
  NotaryComponent } from 'app/components/';
import { BankInfoComponent } from './components/bank-info/bank-info.component';

  @NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    SalesComponent,
    NotaryComponent,
    BankInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    CompanyModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  entryComponents: [
    CustomersComponent,
    SalesComponent,
    NotaryComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
