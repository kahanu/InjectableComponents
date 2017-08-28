import { SalesComponent } from 'app/components/sales/sales.component';
import { CustomersComponent } from 'app/components/customers/customers.component';
import { DynamicComponent } from './../dynamic-component';
import { Injectable } from '@angular/core';

@Injectable()
export class InjectableComponentService {

  constructor() { }

  getComponent(id: string) {
    return this.getComponents().find(item => {
      return item.data.id === id;
    });
  }

  getComponents() {
    return [
      new DynamicComponent(CustomersComponent, { id: '1', btnTitle: 'Customers',  h1: 'Customers', content: 'We have lots of customers.' }),
      new DynamicComponent(SalesComponent, { id: '4', btnTitle: 'Sales', h1: 'Monthly Sales', content: 'Current Sales: 1' })
    ];
  }

}
