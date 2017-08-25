import {AfterViewInit, Component} from '@angular/core';
import { ChartModule } from 'angular2-chartjs';

declare var fillValues: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  title = 'app works! heshan';
  public outputArray: JSON;


  ngAfterViewInit() {
   // fillValues();
  }

  constructor () {
    // this.outputArray = <JSON>this.dataArray;
    // fillValues();
  }



}


