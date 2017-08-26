import { CustomersComponent } from './../../customers/customers.component';
import { DynamicComponent } from './../dynamic-component';
import { Injectable, OnInit } from '@angular/core';
import { InjectableService } from 'app/dynamic/interfaces/injectable-service';
import { SalesComponent } from 'app/sales/sales.component';

@Injectable()
export class InjectableCompanyService implements InjectableService {
  componentList: DynamicComponent[] = [];
  private _companyId: number;

  constructor() { }

  get companyId(): number {
    return this._companyId;
  }

  set companyId(id: number) {
    this._companyId = id;
  }

  // ngOnInit() {
  //   this._companyId = 1;
  //   this.componentList = [
  //     new DynamicComponent(CustomersComponent, { btnTitle: 'Customers', companyId: this._companyId }),
  //     new DynamicComponent(SalesComponent, { btnTitle: 'Sales', companyId: this._companyId })
  //   ];
  // }

  getComponents(): DynamicComponent[] {
    console.log('company id: ', this._companyId);
    return [
      new DynamicComponent(CustomersComponent, { btnTitle: 'Customers', companyId: this._companyId }),
      new DynamicComponent(SalesComponent, { btnTitle: 'Sales', companyId: this._companyId })
    ];
  }

}
