import { JsonApiService } from './../../../core/api/json-api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  @Input() id: number;
  clientList: any[];

  constructor(private jsonService: JsonApiService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.jsonService.fetch('/supplier-clients.json')
      .subscribe(res => {
        let filteredArray: any[] = [];
        filteredArray = res.filter(item => {
          return item.supplierId === this.id;
        });
        this.clientList = filteredArray;
      });
  }

}
