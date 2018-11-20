import { SuppliersModule } from './suppliers/suppliers.module';
import { CompanyModule } from './company/company.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentHostDirective } from './dynamic/component-host.directive';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import {
  CustomersComponent,
  SalesComponent,
  NotaryComponent,
  DistributionsComponent
} from 'app/components/standard';
import {
  CustomersInjectableComponent,
  NotaryInjectableComponent,
  SalesInjectableComponent
} from './components/injectable';
import {
  ClientModalComponent,
  DistributionsModalComponent
} from './components/modals';
import { ClientsComponent } from './components/standard/clients/clients.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { WizardModule } from './wizard/wizard.module';
import { CustomerInfoComponent } from './components/injectable/wizard/customer-info/customer-info.component';
import { SkillsComponent } from './components/injectable/wizard/skills/skills.component';
import { ContactInfoComponent } from './components/injectable/wizard/contact-info/contact-info.component';
import { DoneComponent } from './components/injectable/wizard/done/done.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    SalesComponent,
    NotaryComponent,
    CustomersInjectableComponent,
    NotaryInjectableComponent,
    SalesInjectableComponent,
    ClientModalComponent,
    ClientsComponent,
    DistributionsComponent,
    DistributionsModalComponent,
    CustomerInfoComponent,
    SkillsComponent,
    ContactInfoComponent,
    DoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    CompanyModule,
    CoreModule,
    SharedModule,
    BootstrapModalModule.forRoot({ container: document.body }),
    NgxChartsModule,
    BrowserAnimationsModule,
    SuppliersModule,
    WizardModule,
    AppRoutingModule
  ],
  entryComponents: [
    CustomersComponent,
    SalesComponent,
    NotaryComponent,
    CustomersInjectableComponent,
    NotaryInjectableComponent,
    SalesInjectableComponent,
    ClientModalComponent,
    DistributionsModalComponent,
    CustomerInfoComponent,
    ContactInfoComponent,
    SkillsComponent,
    DoneComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
