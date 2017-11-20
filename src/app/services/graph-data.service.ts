import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {DataService} from './data.service';


@Injectable()
export class GraphDataService extends DataService {


  // Injecting the http client into the service
  constructor(private http: Http) {
    super();
  }

  // Method retrieve all the posts
  getResults (): Observable<any> {
    const url = this.baseUrl+'prediction?id=69&type=0&method=52';
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getXGBResults (): Observable<any> {
    const url = this.baseUrl+'prediction?id=69&type=1';
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getCatBoostResults (): Observable<any> {
    const url = this.baseUrl+'prediction?id=69&type=2';
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getMLPANNResults (): Observable<any> {
    const url = this.baseUrl+'prediction?id=69&type=4';
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getKerasDLResults (): Observable<any> {
    const url = this.baseUrl+'prediction?id=69&type=5';
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getLassoResults (): Observable<any> {
    const url = this.baseUrl+'prediction?id=69&type=3';
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getXGBClassifications (): Observable<any> {
    const url = this.baseUrl+'prediction?id=69&type=7';
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getMLPClassifications (): Observable<any> {
    const url = this.baseUrl+'prediction?id=69&type=6';
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getRFClassifications (): Observable<any> {
    const url = this.baseUrl+'prediction?id=69&type=8';
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getActualClassifications (): Observable<any> {
    const url = this.baseUrl+'prediction?id=69&type=9';
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }




  public getANNResults(): number[] {
    let results: number[];
    results = [450, 59, 80, 89, 756, 55, 40, 350, 59, 80, 81, 656, 55, 40];
    return results;
  }


}
