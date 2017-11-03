import { Component, OnInit } from '@angular/core';
import {GraphDataService} from '../services/graph-data.service';

@Component({
  selector: 'app-graph-classification',
  templateUrl: './graph-classification.component.html',
  styleUrls: ['./graph-classification.component.css']
})
export class GraphClassificationComponent implements OnInit {

  dataArray: any = [[1, 3], [2, 14.01], [3.5, 3.14]];
  type = 'line';

  annGraphData: any[] = [1, 2,3
    ,4,5,6,7,8,9,10,11,12,13, 14];

  lassoGraphData: any[];
  xgBootstGraphData: any[];
  actualGraphData: any[];
  data: any;

  options = {
    backgroundColor: 'red',
    responsive: true,
    maintainAspectRatio: false,
    bezierCurve : false
  };
  private errorMessage: any;

  constructor(private graphService: GraphDataService) {

    // this.getPosts();

    // this.setGraphData();
    // setTimeout(() => this.setGraphData(), 4000 );

  }

  ngOnInit() {
  }

  getPosts() {
    // alert('calling backend');
    // this.graphService.getPosts().map(data => this.annGraphData = data);
    this.graphService.getResults()
      .subscribe(
        (response) => {
          this.annGraphData = response.ann;
          this.actualGraphData = response.actual;
          this.setGraphData();
        },
        function(error) { alert('Error happened' + error); }
        // posts => this.annGraphData = posts,
      );
    // alert(this.annGraphData);
  }


  public setGraphData() {
    console.log('settting graph data' + this.annGraphData);
    this.data = {
      labels: [1, 2,3
        ,4,5,6,7,8,9,10,11,12,13, 14],
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
          data: this.lassoGraphData,
          pointBackgroundColor : '#f20989',
          borderColor: '#ef77b9',
          pointRadius: 5,
          height: '800',
          backgroundColor: 'transparent',
          lineTension: 0
        },
        {
          label: 'XGBootst',
          data: this.lassoGraphData,
          pointBackgroundColor : '#456600',
          borderColor: '#a8f109',
          pointRadius: 5,
          height: '800',
          backgroundColor: 'transparent',
          lineTension: 0
        },
        {
          label: 'Actual',
          data: this.actualGraphData,
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
}
