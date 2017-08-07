import { JsonApiService } from './../core/api/json-api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  url: string;
  constructor(private jsonApiService: JsonApiService) {
    this.url = '/companies.json';
  }

  getCompanies() {
    return this.jsonApiService.fetch(this.url);
  }

}
