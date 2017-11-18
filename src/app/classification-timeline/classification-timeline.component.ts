import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classification-timeline',
  templateUrl: './classification-timeline.component.html',
  styleUrls: ['./classification-timeline.component.css']
})
export class ClassificationTimelineComponent implements OnInit {


  dataArray: any = [1,2,3,1,2,3,1,2,3,1,2,3];
  dataArray2: any = [1,2,3,1,2,1,1,4,3,1,2,3];
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
        lineTension: 0,
        showLine:false,
      });
    this.dataset.push(
      {
        label: 'Predictions',
        data: this.dataArray2,
        pointBackgroundColor: 'red',
        borderColor: 'red',
        pointRadius: 9,
        height: '800',
        backgroundColor: 'transparent',
        lineTension: 0,
        showLine:false,
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
