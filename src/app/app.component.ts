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
        label: 'Dengue Cases',
        data: [950, 59, 80, 81, 756, 55, 40,950, 59, 80, 81, 756, 55, 40],
        pointBackgroundColor : '#3bd66f',
        borderColor: '#57cc7e',
        pointRadius: 5,
        height: '800',
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
    maintainAspectRatio: false
  };

  ngAfterViewInit() {
   // fillValues();
  }

  constructor () {
    // this.outputArray = <JSON>this.dataArray;
    // fillValues();
  }



}


