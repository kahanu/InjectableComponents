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
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SalesComponent } from './sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    OrdersComponent,
    InventoryComponent,
    SalesComponent
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
    OrdersComponent,
    InventoryComponent,
    SalesComponent
  ],
  providers: [InjectableComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
