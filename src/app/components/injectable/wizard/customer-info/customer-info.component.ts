import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PubSubService } from 'app/core/services/pub-sub/pub-sub.service';
import { WizardState } from 'app/core/services/pub-sub/states/wizard-state';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  form: FormGroup;
  @Output() onForm = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder, private pubSub: PubSubService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      city: ['']
    });
  }

  next() {
    const state = new WizardState();
    state.customer = this.form.value;
    state.step = 2;

    this.pubSub.publishWizard(state);
  }

}
