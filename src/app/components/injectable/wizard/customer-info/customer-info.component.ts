import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PubSubService } from 'app/core/services/pub-sub/pub-sub.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  form: FormGroup;

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

}
