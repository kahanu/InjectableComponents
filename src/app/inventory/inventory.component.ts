import { InjectableComponent } from './../dynamic/interfaces/injectable-component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements InjectableComponent {
  @Input() data: any;

  constructor() { }


}
