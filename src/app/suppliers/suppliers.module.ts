import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SuppliersComponent } from './suppliers.component';

@NgModule({
  imports: [
    SharedModule,
    SuppliersRoutingModule
  ],
  declarations: [SuppliersComponent]
})
export class SuppliersModule { }
