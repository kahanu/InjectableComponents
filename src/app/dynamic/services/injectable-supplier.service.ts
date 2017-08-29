import { DistributionsModalComponent } from './../../components/modals/distributions-modal/distributions-modal.component';
import { ClientModalComponent } from './../../components/modals/client-modal/client-modal.component';
import { DynamicComponent } from 'app/dynamic/dynamic-component';
import { InjectableService } from './../interfaces/injectable-service';
import { Injectable } from '@angular/core';

@Injectable()
export class InjectableSupplierService implements InjectableService {
  componentList: DynamicComponent[] = [];
  private _supplierId: number;

  constructor() { }

  get supplierId(): number {
    return this._supplierId;
  }

  set supplierId(id: number) {
    this._supplierId = id;
  }

  getComponents(): DynamicComponent[] {
    return [
      new DynamicComponent(ClientModalComponent, { btnTitle: 'Clients', id: this._supplierId }),
      new DynamicComponent(DistributionsModalComponent, { btnTitle: 'Distributions', id: this._supplierId })
    ];
  }
}
