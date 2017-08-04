import { InjectableComponent } from './../dynamic/interfaces/injectable-component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements InjectableComponent {
  @Input() data: any;

  constructor() { }

}
