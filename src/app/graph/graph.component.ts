import { Component, OnInit } from '@angular/core';
import {GraphDataService} from './graph-data.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  dataArray: any = [[1, 3], [2, 14.01], [3.5, 3.14]];
  type = 'line';

  annGraphData: number[];

  data: any;

  options = {
    backgroundColor: 'red',
    responsive: true,
    maintainAspectRatio: false,
    bezierCurve : false
  };

  constructor(private graphService: GraphDataService) {

    this.annGraphData = graphService.getANNResults();

    this.data = {
      labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
      datasets: [
        {
          label: 'ANN',
          data: this.annGraphData,
          pointBackgroundColor : '#3bd66f',
          borderColor: '#57cc7e',
          pointRadius: 5,
          height: '800',
          backgroundColor: 'transparent',
          lineTension: 0
        },
        {
          label: 'Lasso',
          data: [77, 169, 200, 199, 95, 105, 380, 290, 259, 280, 189, 46, 5, 4],
          pointBackgroundColor : '#f20989',
          borderColor: '#ef77b9',
          pointRadius: 5,
          height: '800',
          backgroundColor: 'transparent',
          lineTension: 0
        },
        {
          label: 'Actual',
          data: [97, 69, 500, 99, 75, 65, 80, 90, 59, 180, 89, 76, 45, 49],
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

  }

  ngOnInit() {
  }

}
