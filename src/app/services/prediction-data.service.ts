import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DataService} from './data.service';
import {Http} from '@angular/http';

@Injectable()
export class PredictionDataService extends DataService {

  mohName
  testResponse = {'data':[
    {'mohName': 'colombo', 'mohId':'69', 'actual': 1000, 'predictedCases': 1090, 'predictedLevel': 2},
    {'mohName': 'dehiwala','mohId':'173' ,'actual': 120, 'predictedCases': 190, 'predictedLevel': 3}
  ]};


  constructor(private http: Http) {
    super();
  }


  getCurrentPredictions(district: string, year: number): Observable<any> {
    // const url = this.baseUrl + 'currentPredictions?district=' + district + '&year=' + year;
    // return this.http.get(url)
    //   .map(this.parseData)
    //   .catch(this.handleError);
    return new Observable(
      subscriber => {
        subscriber.next(JSON.stringify(this.testResponse));
      }
    );
  }

  getStat(): Observable<any> {
    const url = this.baseUrl + 'getStat';
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getRegressionTimeline(district: string, moh: string, year: number): Observable<any> {
    const url = this.baseUrl + 'regressionTimeline?district=' + district + '&year=' + year + '&moh=' + moh;
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getClassificationTimeline(district: string, moh: string, year: number): Observable<any> {
    const url = this.baseUrl + 'classificationTimeline?district=' + district + '&year=' + year + '&moh=' + moh;
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

}
