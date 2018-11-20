import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WizardState } from 'app/core/services/pub-sub/states/wizard-state';
import { PubSubService } from 'app/core/services/pub-sub/pub-sub.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  form: FormGroup;
  skills: Array<string>;
  wizardState: WizardState;

  constructor(private fb: FormBuilder,
    private pubSub: PubSubService) { }

  ngOnInit() {
    this.initForm();
    this.skills = [ 'C#', 'Typescript', 'NodeJS', 'git', 'MongoDB', 'SQL Server' ];
    this.pubSub.getWizard()
    .subscribe(data => {
      this.wizardState = data;
    });

  }

  initForm() {
    this.form = this.fb.group({
      skills: []
    });
  }

  next() {
    this.wizardState.skills = ['C#', 'Typescript', 'MongoDB'];
    this.wizardState.step = 4;

    this.pubSub.publishWizard(this.wizardState);
  }

}
