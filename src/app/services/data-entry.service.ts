import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Rx';
import {DataService} from './data.service';
import {NgForm} from '@angular/forms';

@Injectable()
export class DataEntryService extends DataService {
  private headers;
  constructor(private http: Http) {
    super();
      this.headers = new Headers({
          'accept': 'application/json'
      });
  }
  getLastWeek (moh:string): Observable<any> {
    // const url = 'http://dengue.projects.mrt.ac.lk:8091/getlastweek';
    return this.http.get(this.baseUrl+'getLastWeek?id='+moh)
      .map(this.parseData)
      .catch(this.handleError);
  }

  sendWeekData(form:any): Observable<any> {
      // const url = 'http://dengue.projects.mrt.ac.lk:8091/addRecord';
      return this.http.post(this.baseUrl+'addRecord',{form})
          .map(this.parseData)
          .catch(this.handleError);
  }




}
