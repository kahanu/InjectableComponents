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
    HomeService
  ]
})
export class CoreModule { }
