import { InjectableComponent } from './../../../dynamic/interfaces/injectable-component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notary-injectable',
  templateUrl: './notary-injectable.component.html',
  styleUrls: ['./notary-injectable.component.css']
})
export class NotaryInjectableComponent implements InjectableComponent, OnInit {
  @Input() data: any;
  id: number;

  constructor() { }

  ngOnInit() {
    this.id = this.data.id;
  }

}
