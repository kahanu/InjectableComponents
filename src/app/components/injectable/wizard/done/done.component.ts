import { Component, OnInit } from '@angular/core';
import { PubSubService } from 'app/core/services/pub-sub/pub-sub.service';
import { WizardState } from 'app/core/services/pub-sub/states/wizard-state';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  wizardState: WizardState;

  constructor(private pubSub: PubSubService) { }

  ngOnInit() {
    this.pubSub.getWizard()
      .subscribe(data => {
        this.wizardState = data;
      });
  }

  back() {
    const state = new WizardState();
    state.step = 1;

    this.pubSub.publishWizard(state);
  }

}
