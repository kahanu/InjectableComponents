import { SalesComponent } from './../../sales/sales.component';
import { InventoryComponent } from './../../inventory/inventory.component';
import { OrdersComponent } from './../../orders/orders.component';
import { CustomersComponent } from './../../customers/customers.component';
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
      new DynamicComponent(OrdersComponent, { id: '2', btnTitle: 'Orders',  h1: 'Today\'s Orders', content: '42 orders today.' }),
      new DynamicComponent(InventoryComponent, { id: '3', btnTitle: 'Inventory',  h1: 'Inventory', content: 'Powder kegs: 128' }),
      new DynamicComponent(SalesComponent, { id: '4', btnTitle: 'Sales', h1: 'Monthly Sales', content: 'Current Sales: 1' })
    ];
  }

}
