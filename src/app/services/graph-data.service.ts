import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
// import {Observable} from 'rxjs/Observable';
import {Prediction} from './prediction';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {stringDistance} from 'codelyzer/util/utils';


@Injectable()
export class GraphDataService {


  // Injecting the http client into the service
  constructor(private http: Http) {}

  // Method retrieve all the posts
  getResults (): Observable<any> {
    const url = 'http://dengue.projects.mrt.ac.lk:8091/prediction?id=69&type=0';
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getXGBResults (): Observable<any> {
    const url = 'http://dengue.projects.mrt.ac.lk:8091/prediction?id=69&type=1';
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getCatBoostResults (): Observable<any> {
    const url = 'http://dengue.projects.mrt.ac.lk:8091/prediction?id=69&type=2';
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getMLPANNResults (): Observable<any> {
    const url = 'http://dengue.projects.mrt.ac.lk:8091/prediction?id=69&type=4';
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getKerasDLResults (): Observable<any> {
    const url = 'http://dengue.projects.mrt.ac.lk:8091/prediction?id=69&type=5';
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getLassoResults (): Observable<any> {
    const url = 'http://dengue.projects.mrt.ac.lk:8091/prediction?id=69&type=3';
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

  public getANNResults(): number[] {
    let results: number[];
    results = [450, 59, 80, 89, 756, 55, 40, 350, 59, 80, 81, 656, 55, 40];
    return results;
  }


}
