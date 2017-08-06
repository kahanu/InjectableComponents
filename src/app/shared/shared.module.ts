import { ComponentHostDirective } from './../dynamic/component-host.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ComponentHostDirective
  ],
  exports: [
    CommonModule,
    ComponentHostDirective
  ]
})
export class SharedModule { }
