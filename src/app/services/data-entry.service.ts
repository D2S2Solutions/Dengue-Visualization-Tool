import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
// import {Observable} from 'rxjs/Observable';
// import {Prediction} from './prediction';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {stringDistance} from 'codelyzer/util/utils';

@Injectable()
export class DataEntryService {

  constructor(private http: Http) { }

  getLastWeek (): Observable<any> {
    const url = 'http://dengue.projects.mrt.ac.lk:8091/getlastweek';
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  // This method parses the data to JSON
  private parseData(res: Response)  {
    return res.json() || [];
  }

  // Displays the error message
  private handleError(error: Response | any) {
    let errorMessage: string;

    errorMessage = error.message ? error.message : error.toString();

    // In real world application, call to log error to remote server
    // logError(error);

    // This returns another Observable for the observer to subscribe to
    return Observable.throw(errorMessage);
  }


}
