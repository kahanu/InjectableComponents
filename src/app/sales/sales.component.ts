import { JsonApiService } from './../core/api/json-api.service';
import { ChildItem } from './../shared/models/models';
import { InjectableComponent } from './../dynamic/interfaces/injectable-component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements InjectableComponent, OnInit {
  @Input() data: any;
  sales: any[];

  constructor(private jsonService: JsonApiService) { }

  ngOnInit() {
    console.log('sales data property: ', this.data);
    // this.item = this.items[0];
    // console.log('selected sales item: ', this.item);
    this.getSales();
  }

  getSales() {
    this.jsonService.fetch('/sales.json')
      .subscribe(res => {
        console.log('res sales array: ', res);
        const filteredArray: any[] = [];
        res.forEach(element => {
          console.log(element);
          if (element.companyId === this.data.companyId) {
            filteredArray.push(element);
          }
        });
        this.sales = filteredArray;
      });
  }

}
