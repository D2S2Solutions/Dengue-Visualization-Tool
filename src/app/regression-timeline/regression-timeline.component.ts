import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regression-timeline',
  templateUrl: './regression-timeline.component.html',
  styleUrls: ['./regression-timeline.component.css']
})
export class RegressionTimelineComponent implements OnInit {

  dataArray: any = [2,1,21,312,123,123,1,12,12,12,12,12,12,12,31,212,31,31,231];
  dataArray2: any = [8,10,45,112,133,70,49,18,18,32,34,19,21,23,31,70,61,41,161,130,78,99];
  type = 'line';
  labels:any=[];
  data:any=[];
  dataset:any=[];

  options = {
    backgroundColor: 'red',
    responsive: true,
    maintainAspectRatio: false,
    bezierCurve: false
  };

  constructor() {
    let x = 0;
    for (; x < 52; x++) {
      this.labels[x] = x + 1;
    }
    this.setGraphData();
  }

  ngOnInit() {
  }


  public setGraphData() {

    this.dataset.push(
      {
        label: 'Actual',
        data: this.dataArray,
        pointBackgroundColor: '#1b69e5',
        borderColor: '#8db0e8',
        pointRadius: 5,
        height: '800',
        backgroundColor: 'transparent',
        lineTension: 0
      });

    this.dataset.push(
      {
        label: 'Predicted',
        data: this.dataArray2,
        pointBackgroundColor: 'green',
        borderColor: '#d8732b',
        pointRadius: 5,
        height: '800',
        backgroundColor: 'transparent',
        lineTension: 0
      });

    this.data = {
      labels: this.labels,
      datasets: this.dataset,
      borderColor: [
        'rgba(255,99,132,1,)'
      ],
      borderWidth: 1,

    };

  }

}
