import { InjectableComponent } from './../../../dynamic/interfaces/injectable-component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sales-injectable',
  templateUrl: './sales-injectable.component.html',
  styleUrls: ['./sales-injectable.component.css']
})
export class SalesInjectableComponent implements InjectableComponent, OnInit {
  @Input() data: any;
  id: number;

  constructor() { }

  ngOnInit() {
    this.id = this.data.id;
  }

}
