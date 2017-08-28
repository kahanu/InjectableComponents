import { JsonApiService } from 'app/core/api/json-api.service';
import { InjectableComponent } from 'app/dynamic/interfaces/injectable-component';
import { Component, OnInit, Input } from '@angular/core';
import { ChildItem } from 'app/shared/models/models';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements InjectableComponent, OnInit {
  @Input() data: any;
  customerList: any[];

  constructor(private jsonService: JsonApiService) { }

  ngOnInit() {
    console.log('customers data property: ', this.data);
    this.getCustomers();
  }

  getCustomers() {
    this.jsonService.fetch('/customers.json')
      .subscribe(res => {
        let filteredArray: any[] = [];
        filteredArray = res.filter(item => {
          return item.companyId === this.data.companyId;
        });
        this.customerList = filteredArray;
      });
  }


}
