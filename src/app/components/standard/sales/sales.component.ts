import { JsonApiService } from 'app/core/api/json-api.service';
import { ChildItem } from 'app/shared/models/models';
import { InjectableComponent } from 'app/dynamic/interfaces/injectable-component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  @Input() id: number;
  sales: any[];

  constructor(private jsonService: JsonApiService) { }

  ngOnInit() {
    this.getSales();
  }

  getSales() {
    this.jsonService.fetch('/sales.json')
      .subscribe(res => {
        let filteredArray: any[] = [];
        filteredArray = res.filter(item => {
          return item.companyId === this.id;
        });
        this.sales = filteredArray;
      });
  }

}
