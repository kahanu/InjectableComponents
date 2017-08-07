import { DynamicContentComponent } from './../dynamic/dynamic-content/dynamic-content.component';
import { ComponentHostDirective } from './../dynamic/component-host.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ComponentHostDirective,
    DynamicContentComponent
  ],
  exports: [
    CommonModule,
    ComponentHostDirective,
    DynamicContentComponent
  ]
})
export class SharedModule { }
