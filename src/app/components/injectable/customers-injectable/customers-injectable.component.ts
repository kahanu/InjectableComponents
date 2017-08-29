import { InjectableComponent } from 'app/dynamic/interfaces/injectable-component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customers-injectable',
  templateUrl: './customers-injectable.component.html',
  styleUrls: ['./customers-injectable.component.css']
})
export class CustomersInjectableComponent implements InjectableComponent, OnInit {
  @Input() data: any;
  id: number;

  constructor() { }

  ngOnInit() {
    this.id = this.data.id;
  }

}
