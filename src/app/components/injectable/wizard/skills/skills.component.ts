import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  form: FormGroup;
  skills: Array<string>;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.skills = [ 'C#', 'Typescript', 'NodeJS', 'git', 'MongoDB', 'SQL Server' ];
  }

  initForm() {
    this.form = this.fb.group({
      skills: []
    });
  }

}
