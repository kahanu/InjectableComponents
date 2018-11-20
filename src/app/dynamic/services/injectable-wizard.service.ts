import { Injectable } from '@angular/core';
import { InjectableService } from '../interfaces/injectable-service';
import { DynamicComponent } from '../dynamic-component';
import { CustomerInfoComponent } from 'app/components/injectable/wizard/customer-info/customer-info.component';
import { ContactInfoComponent } from 'app/components/injectable/wizard/contact-info/contact-info.component';
import { SkillsComponent } from 'app/components/injectable/wizard/skills/skills.component';
import { DoneComponent } from 'app/components/injectable/wizard/done/done.component';

@Injectable()
export class InjectableWizardService implements InjectableService {

  constructor() { }

  getComponents(): DynamicComponent[] {
    return [
      new DynamicComponent(CustomerInfoComponent, { title: 'Customer Info'}),
      new DynamicComponent(ContactInfoComponent, { title: 'Contact Info'}),
      new DynamicComponent(SkillsComponent, { title: 'Skills'}),
      new DynamicComponent(DoneComponent, { title: 'Done' })
    ];
  }

}
