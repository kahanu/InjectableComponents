import { InjectableService } from './../interfaces/injectable-service';
import { DynamicComponent } from './../dynamic-component';
import { Injectable } from '@angular/core';

@Injectable()
export class InjectableClientService implements InjectableService {
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
      // new DynamicComponent(CustomersComponent, { btnTitle: 'Customers', companyId: this._companyId }),
      // new DynamicComponent(SalesComponent, { btnTitle: 'Sales', companyId: this._companyId }),
      // new DynamicComponent(NotaryComponent, { btnTitle: 'Notary', companyId: this._companyId })
    ];
  }
}
