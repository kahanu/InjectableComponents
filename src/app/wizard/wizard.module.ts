import { NgModule } from '@angular/core';

import { WizardRoutingModule } from './wizard-routing.module';
import { WizardComponent } from './wizard.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    WizardRoutingModule
  ],
  declarations: [WizardComponent]
})
export class WizardModule { }
