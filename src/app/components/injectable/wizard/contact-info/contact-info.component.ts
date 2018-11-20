import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WizardState } from 'app/core/services/pub-sub/states/wizard-state';
import { PubSubService } from 'app/core/services/pub-sub/pub-sub.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  form: FormGroup;
  wizardState: WizardState;

  constructor(private fb: FormBuilder,
    private pubSub: PubSubService) { }

  ngOnInit() {
    this.initForm();
    this.pubSub.getWizard()
      .subscribe(data => {
        this.wizardState = data;
      });
  }

  initForm() {
    this.form = this.fb.group({
      email: [''],
      phone: ['']
    });
  }

  next() {
    this.wizardState.contact = this.form.value;
    this.wizardState.step = 3;

    this.pubSub.publishWizard(this.wizardState);
  }

}
