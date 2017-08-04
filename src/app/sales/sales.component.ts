import { InjectableComponent } from './../dynamic/interfaces/injectable-component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements InjectableComponent {
  @Input() data: any;

  constructor() { }


}
