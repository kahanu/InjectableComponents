import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, StatsComponent],
  exports: [HomeComponent, StatsComponent]
})
export class HomeModule { }
