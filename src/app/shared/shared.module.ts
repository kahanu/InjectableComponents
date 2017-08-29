import { RouterModule } from '@angular/router';
import { DynamicContentComponent } from './../dynamic/dynamic-content/dynamic-content.component';
import { ComponentHostDirective } from './../dynamic/component-host.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ComponentHostDirective,
    DynamicContentComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    ComponentHostDirective,
    DynamicContentComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
