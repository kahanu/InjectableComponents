import { JsonApiService } from 'app/core/api/json-api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  @Input() id: number;
  customerList: any[];

  constructor(private jsonService: JsonApiService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.jsonService.fetch('/customers.json')
      .subscribe(res => {
        let filteredArray: any[] = [];
        filteredArray = res.filter(item => {
          return item.companyId === this.id;
        });
        this.customerList = filteredArray;
      });
  }


}
