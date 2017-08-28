import { JsonApiService } from 'app/core/api/json-api.service';
import { InjectableComponent } from 'app/dynamic/interfaces/injectable-component';
import { Component, OnInit, Input } from '@angular/core';
import { Notary } from 'app/shared/models/models';

@Component({
  selector: 'app-notary',
  templateUrl: './notary.component.html',
  styleUrls: ['./notary.component.css']
})
export class NotaryComponent implements InjectableComponent, OnInit {
  @Input() data: any;
  notary: Notary;

  constructor(private jsonService: JsonApiService) { }

  ngOnInit() {
    this.getNotary();
  }

  getNotary() {
    this.jsonService.fetch('/notary.json')
      .subscribe(res => {
        this.notary = res;
      });
  }

}
