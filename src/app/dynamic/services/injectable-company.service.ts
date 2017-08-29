import { CustomersInjectableComponent,
  SalesInjectableComponent,
  NotaryInjectableComponent } from 'app/components/injectable';
import { DynamicComponent } from 'app/dynamic/dynamic-component';
import { Injectable, OnInit } from '@angular/core';
import { InjectableService } from 'app/dynamic/interfaces/injectable-service';

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
    return [
      new DynamicComponent(CustomersInjectableComponent, { btnTitle: 'Customers', id: this._companyId }),
      new DynamicComponent(SalesInjectableComponent, { btnTitle: 'Sales', id: this._companyId }),
      new DynamicComponent(NotaryInjectableComponent, { btnTitle: 'Notary', id: this._companyId })
    ];
  }

}
