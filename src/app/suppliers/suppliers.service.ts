import { JsonApiService } from './../core/api/json-api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SuppliersService {

  url: string;
  constructor(private jsonApiService: JsonApiService) {
    this.url = '/suppliers.json';
  }

  getSuppliers() {
    return this.jsonApiService.fetch(this.url);
  }

}
