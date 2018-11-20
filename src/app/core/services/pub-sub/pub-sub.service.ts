import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { WizardState } from './states/wizard-state';

@Injectable()
export class PubSubService {

  wizardPublisher = new BehaviorSubject<WizardState>(new WizardState());

  constructor() { }

  publishWizard(state: WizardState) {
    this.wizardPublisher.next(state);
  }

  getWizard(): Observable<WizardState> {
    return this.wizardPublisher.asObservable();
  }

}
