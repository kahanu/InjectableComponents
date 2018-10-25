import { config } from './../../shared/shared.config';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import { environment } from 'environments/environment';

@Injectable()
export class JsonApiService {

  constructor(private http: Http) {}

  public fetch(url): Observable<any> {
    return this.http.get(environment.Api + url)
      .delay(100)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private getBaseUrl() {
    return location.protocol + '//' + location.hostname + (location.port ? ':' +location.port : '') + '/';
  }

  private extractData(value: any) {
    const body = value.json();
    if (body) {
      return body.data || body;
    } else {
      return {};
    }
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}
