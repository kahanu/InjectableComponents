import { InjectableComponent } from './../dynamic/interfaces/injectable-component';
import { Component, OnInit, Input } from '@angular/core';
import { ChildItem } from 'app/shared/models/models';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements InjectableComponent, OnInit {
  @Input() data: any;
  item: ChildItem;
  items: ChildItem[] = [
    { companyId: 1, h1: 'Customer Orders', content: 'Customer order up 28% this quarter.' },
    { companyId: 2, h1: 'Customer Orders', content: 'Customer retention lacking this quarter.' }
  ];

  constructor() { }

  ngOnInit() {
    this.item = this.items[this.data];
  }



}
