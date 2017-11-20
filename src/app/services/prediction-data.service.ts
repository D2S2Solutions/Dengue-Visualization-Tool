import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DataService} from './data.service';
import {Http} from '@angular/http';

@Injectable()
export class PredictionDataService extends DataService {

  constructor(private http:Http) {
    super();
  }

  getCurrentPredictions (district:string,year:number): Observable<any> {
    const url = this.baseUrl+'currentPredictions?district='+district+'&year='+year;
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getStat (): Observable<any> {
    const url = this.baseUrl+'getStat';
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getRegressionTimeline (district:string,moh:string,year:number): Observable<any> {
    const url = this.baseUrl+'regressionTimeline?district='+district+'&year='+year+'&moh='+moh;
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getClassificationTimeline (district:string,moh:string,year:number): Observable<any> {
    const url = this.baseUrl+'classificationTimeline?district='+district+'&year='+year+'&moh='+moh;
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

}
