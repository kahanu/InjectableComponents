import { InjectableComponent } from './../dynamic/interfaces/injectable-component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements InjectableComponent {
  @Input() data: any;

  constructor() { }


}
