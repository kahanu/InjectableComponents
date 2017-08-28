import { NotaryComponent } from 'app/components/notary/notary.component';
import { DynamicComponent } from 'app/dynamic/dynamic-component';
import { CustomersComponent } from 'app/components/customers/customers.component';
import { Injectable, OnInit } from '@angular/core';
import { InjectableService } from 'app/dynamic/interfaces/injectable-service';
import { SalesComponent } from 'app/components/sales/sales.component';

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

  getComponents(): DynamicComponent[] {
    console.log('company id: ', this._companyId);
    return [
      new DynamicComponent(CustomersComponent, { btnTitle: 'Customers', companyId: this._companyId }),
      new DynamicComponent(SalesComponent, { btnTitle: 'Sales', companyId: this._companyId }),
      new DynamicComponent(NotaryComponent, { btnTitle: 'Notary', companyId: this._companyId })
    ];
  }

}
