import { CompanyModule } from './company/company.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
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
  NotaryComponent
} from 'app/components/standard';
import {
  CustomersInjectableComponent,
  NotaryInjectableComponent,
  SalesInjectableComponent
} from './components/injectable';
import { ClientModalComponent } from './components/modals';
import { ClientsComponent } from './components/standard/clients/clients.component';

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
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    CompanyModule,
    CoreModule,
    SharedModule,
    BootstrapModalModule.forRoot({container: document.body}),
    AppRoutingModule
  ],
  entryComponents: [
    CustomersComponent,
    SalesComponent,
    NotaryComponent,
    CustomersInjectableComponent,
    NotaryInjectableComponent,
    SalesInjectableComponent,
    ClientModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
