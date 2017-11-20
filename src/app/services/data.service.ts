import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  // protected baseUrl='http://dengue.projects.mrt.ac.lk:8091/';
  protected baseUrl='http://127.0.0.1:5000/';

  constructor() { }

  // This method parses the data to JSON
  protected parseData(res: Response)  {
    return res.json() || [];
  }

  protected parseDataFORHOme(res: Response)  {
    // alert(res.json());
    return res.json() || [];
  }

  // Displays the error message
  protected handleError(error: Response | any) {
    let errorMessage: string;

    errorMessage = error.message ? error.message : error.toString();

    // In real world application, call to log error to remote server
    // logError(error);

    // This returns another Observable for the observer to subscribe to
    return Observable.throw(errorMessage);
  }

}
