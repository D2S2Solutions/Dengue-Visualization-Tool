import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {DataService} from './data.service';


@Injectable()
export class GraphDataService extends DataService {

  private static METHOD_52='52';
  private static METHOD_12='12';
  private static METHOD_1='1';

  private static ACTUAL_TYPE='0';
  private static XGB_REG_TYPE='1';
  private static CATBOOST_REG_TYPE='2';
  private static LASSO_REG_TYPE='3';
  private static KERAS_ANN_REG_TYPE='4';
  private static MLP_REG_TYPE='5';
  private static MLP_LEVEL_TYPE='6';
  private static XGB_LEVEL_TYPE='7';
  private static RF_LEVEL_TYPE='8';
  private static ACTUAL_LEVEL_TYPE='9';

  private static PREDICTION_END_POINT='prediction?';

  // Injecting the http client into the service
  constructor(private http: Http) {
    super();
  }

  // Method retrieve all the posts
  getResults (moh:string): Observable<any> {
    const url = this.baseUrl+GraphDataService.PREDICTION_END_POINT+
      'id='+moh+
      '&type='+GraphDataService.ACTUAL_TYPE+
      '&method='+GraphDataService.METHOD_52;
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getXGBResults (moh): Observable<any> {
    const url = this.baseUrl+GraphDataService.PREDICTION_END_POINT+
      'id='+moh+
      '&type='+GraphDataService.XGB_REG_TYPE+
      '&method='+GraphDataService.METHOD_52;
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getCatBoostResults (moh): Observable<any> {
    const url = this.baseUrl+GraphDataService.PREDICTION_END_POINT+
      'id='+moh+
      '&type='+GraphDataService.CATBOOST_REG_TYPE+
      '&method='+GraphDataService.METHOD_52;
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getMLPANNResults (moh): Observable<any> {
    const url = this.baseUrl+GraphDataService.PREDICTION_END_POINT+
      'id='+moh+'&type='+GraphDataService.MLP_REG_TYPE+
      '&method='+GraphDataService.METHOD_52;
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getKerasDLResults (moh): Observable<any> {
    const url = this.baseUrl+GraphDataService.PREDICTION_END_POINT+
      'id='+moh+
      '&type='+GraphDataService.KERAS_ANN_REG_TYPE+
      '&method='+GraphDataService.METHOD_52;
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getLassoResults (moh): Observable<any> {
    const url = this.baseUrl+GraphDataService.PREDICTION_END_POINT+
      'id='+moh+
      '&type='+GraphDataService.LASSO_REG_TYPE+
      '&method='+GraphDataService.METHOD_52;
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getXGBClassifications (moh): Observable<any> {
    const url = this.baseUrl+GraphDataService.PREDICTION_END_POINT+
      'id='+moh+
      '&type='+GraphDataService.XGB_LEVEL_TYPE+
      '&method='+GraphDataService.METHOD_52;
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getMLPClassifications (moh): Observable<any> {
    const url = this.baseUrl+GraphDataService.PREDICTION_END_POINT+
      'id='+moh+
      '&type='+GraphDataService.MLP_LEVEL_TYPE+
      '&method='+GraphDataService.METHOD_52;
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getRFClassifications (moh): Observable<any> {
    const url = this.baseUrl+GraphDataService.PREDICTION_END_POINT+
      'id='+moh+
      '&type='+GraphDataService.RF_LEVEL_TYPE+
      '&method='+GraphDataService.METHOD_52;
    return this.http.get(url)
      .map(this.parseData)
      .catch(this.handleError);
  }

  getActualClassifications (moh): Observable<any> {
    const url = this.baseUrl+GraphDataService.PREDICTION_END_POINT+
      'id='+moh+
      '&type='+GraphDataService.ACTUAL_LEVEL_TYPE+
      '&method='+GraphDataService.METHOD_52;
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
