import {AfterViewInit, Component} from '@angular/core';
import { ChartModule } from 'angular2-chartjs';

declare var fillValues: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  title = 'app works! heshan';
  public outputArray: JSON ;
  dataArray: any = [[1, 3], [2, 14.01], [3.5, 3.14]];
  type = 'line';
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'ANN',
        data: [450, 59, 80, 81, 756, 55, 40,350, 59, 80, 81, 656, 55, 40],
        pointBackgroundColor : '#3bd66f',
        borderColor: '#57cc7e',
        pointRadius: 5,
        height: '800',
        backgroundColor: 'transparent',
        lineTension: 0
      },
      {
        label: 'Lasso',
        data: [77, 169, 200, 199, 95, 105, 380,290, 259, 280, 189, 46, 5, 4],
        pointBackgroundColor : '#f20989',
        borderColor: '#ef77b9',
        pointRadius: 5,
        height: '800',
        backgroundColor: 'transparent',
        lineTension: 0
      },
      {
        label: 'Actual',
        data: [97, 69, 500, 99, 75, 65, 80,90, 59, 180, 89, 76, 45, 49],
        pointBackgroundColor : '#1b69e5',
        borderColor: '#8db0e8',
        pointRadius: 5,
        height: '800',
        backgroundColor: 'transparent',
        lineTension: 0
      }
    ],
    borderColor : [
      'rgba(255,99,132,1)'
    ],
    borderWidth: 1,

  };
  options = {
    backgroundColor: 'red',
    responsive: true,
    maintainAspectRatio: false,
    bezierCurve : false
  };

  ngAfterViewInit() {
   // fillValues();
  }

  constructor () {
    // this.outputArray = <JSON>this.dataArray;
    // fillValues();
  }



}


