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

  annGraphData: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  xgBootstGraphData: any[]=[2,
    2,
    2,
    2,
    2,
    2,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    3,
    3,
    2,
    3,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    2,
  ];
  RFGraphData: any[]=[2,    2,    2,    2,    2,    2,    1,    2,    1,    1,    2,    1,    1,    1,    1,    1,    1,    1,    1,    1,    1,    2,    1,    2,    2,    3,    2,    2,    2,    2,    2,    2,    2,    1,    1,    1,    1,    1,    2,    2,    2,    2,    2,    2,    2,    2,    2,    3,    3,    3,    2,    2,  ];
  MLPANNGraphData: any[]=[2,
  2,
  2,
  2,
  2,
  2,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  1,
  2,
  1,
  3,
  2,
  3,
  2,
  3,
  2,
  2,
  2,
  2,
  2,
  1,
  1,
  1,
  1,
  2,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  3,
  3,
  2,
];
  actualGraphData: any[]=[3,
  2,  2,  2,  2,  2,  1,  2,  1,  2,  1,  1,  1,  1,  1,  1,  2,  1,  1,  1,  2,  2,  2,  3,  2,  3,  2,  3,  2,  2,  2,  2,  1,  1,  1,  1,  1,  2,  2,  2,  2,  2,  2,  2,  2,  3,  2,  3,  3,  3,  3,  2,];

  data: any;
  labels: any[] = [];
  dataset: any[] = [];

  xgBIndex: number = -1;
  mlpANNIndex: number = -1;
  rfIndex: number = -1;


  options = {
    backgroundColor: 'red',
    responsive: true,
    maintainAspectRatio: false,
    bezierCurve: false,
    steppedLine:true,
  };
  private errorMessage: any;

  constructor(private graphService: GraphDataService) {
    // this.testfn();
    this.getPosts();
    //
    // this.setGraphData();
    // setTimeout(() => this.setGraphData(), 4000 );

  }



  ngOnInit() {
  }

  testfn(){
    this.dataset.push(
      {
        label: 'Actual',
        data: this.actualGraphData,
        pointBackgroundColor: '#1b69e5',
        borderColor: '#8db0e8',
        pointRadius: 4,
        height: '900',
        backgroundColor: 'transparent',
        lineTension: 0,
        steppedLine: false,

      });

    this.dataset.push({
      label: 'XGBoost',
      data: this.xgBootstGraphData,
      pointBackgroundColor: '#3bd66f',
      borderColor: '#57cc7e',
      pointRadius: 6,
      height: '900',
      backgroundColor: 'transparent',
      lineTension: 0
    });
    this.dataset.push({
      label: 'MLP-ANN',
      data: this.MLPANNGraphData,
      pointBackgroundColor: '#e09808',
      borderColor: '#edb649',
      pointRadius: 8,
      height: '900',
      backgroundColor: 'transparent',
      lineTension: 0
    });

    this.dataset.push({
      label: 'ANN-DL',
      data: this.RFGraphData,
      pointBackgroundColor: '#5e058e',
      borderColor: '#c992e8',
      pointRadius: 10,
      height: '900',
      backgroundColor: 'transparent',
      lineTension: 0
    });

    let x = 0;
    for (; x < this.actualGraphData.length; x++) {
      this.labels[x] = x + 1;
    }

    this.setGraphData();

  }

  getPosts() {
    // alert('calling backend');
    // this.graphService.getPosts().map(data => this.annGraphData = data);
    this.graphService.getActualClassifications()
      .subscribe(
        (response) => {
          // this.annGraphData = response.ann;
          this.actualGraphData = response.predictions;
          this.dataset.push(
            {
              label: 'Actual',
              data: this.actualGraphData,
              pointBackgroundColor: '#1b69e5',
              borderColor: '#8db0e8',
              pointRadius: 5,
              height: '800',
              backgroundColor: 'transparent',
              lineTension: 0,
              steppedLine : false,
              showLine:false,
            });

          let x = 0;
          for (; x < this.actualGraphData.length; x++) {
            this.labels[x] = x + 1;
          }
          this.setGraphData();
        },
        function (error) {
          alert('Error happened' + error);
        }
        // posts => this.annGraphData = posts,
      );
    // alert(this.annGraphData);
  }


  public setGraphData() {
    this.data = {
      labels: this.labels,
      datasets: this.dataset,
      borderColor: [
        'rgba(255,99,132,1,)'
      ],
      borderWidth: 1,

    };

  }

  public setXGBData(event) {
    const target = <HTMLInputElement> event.target || event.srcElement || event.currentTarget;
    const isChecked = target.checked;
    if (isChecked) {
      this.graphService.getXGBClassifications()
        .subscribe(
          (response) => {
            // this.annGraphData = response.ann;
            this.xgBootstGraphData = response.predictions;
            this.xgBIndex = this.dataset.length;
            this.dataset.push({
              label: 'XGBoost',
              data: this.xgBootstGraphData,
              pointBackgroundColor: 'red',
              borderColor: '#57cc7e',
              pointRadius: 9,
              height: '800',
              backgroundColor: 'transparent',
              lineTension: 0,
              steppedLine : false,
              showLine:false,
            });
            this.setGraphData();
          },
          function (error) {
            alert('Error happened' + error);
          }
          // posts => this.annGraphData = posts,
        );
    } else {
      this.dataset.splice(this.xgBIndex, 1);
      this.reorganizeIndexes(this.xgBIndex);
      this.setGraphData();
    }
  }

  public setMLPANNData(event) {
    const target = <HTMLInputElement> event.target || event.srcElement || event.currentTarget;
    const isChecked = target.checked;
    if (isChecked) {
      this.graphService.getMLPClassifications()
        .subscribe(
          (response) => {
            // this.annGraphData = response.ann;
            this.MLPANNGraphData = response.predictions;
            this.mlpANNIndex = this.dataset.length;
            this.dataset.push({
              label: 'MLP-ANN',
              data: this.MLPANNGraphData,
              pointBackgroundColor: '#e09808',
              borderColor: '#edb649',
              pointRadius: 5,
              height: '800',
              backgroundColor: 'transparent',
              lineTension: 0
            });
            this.setGraphData();
          },
          function (error) {
            alert('Error happened' + error);
          }
          // posts => this.annGraphData = posts,
        );
    } else {
      this.dataset.splice(this.mlpANNIndex, 1);
      this.reorganizeIndexes(this.mlpANNIndex);
      this.setGraphData();

    }
  }

  public setRFData(event) {
    const target = <HTMLInputElement> event.target || event.srcElement || event.currentTarget;
    const isChecked = target.checked;
    if (isChecked) {
      this.graphService.getRFClassifications()
        .subscribe(
          (response) => {
            // this.annGraphData = response.ann;
            this.RFGraphData = response.predictions;
            this.rfIndex = this.dataset.length;
            this.dataset.push({
              label: 'ANN-DL',
              data: this.RFGraphData,
              pointBackgroundColor: '#5e058e',
              borderColor: '#c992e8',
              pointRadius: 5,
              height: '800',
              backgroundColor: 'transparent',
              lineTension: 0
            });
            this.setGraphData();
          },
          function (error) {
            alert('Error happened' + error);
          }
          // posts => this.annGraphData = posts,
        );
    } else {
      this.dataset.splice(this.rfIndex, 1);
      this.reorganizeIndexes(this.rfIndex);
      this.setGraphData();

    }
  }

  private reorganizeIndexes(index) {
    if (this.rfIndex > index) {
      this.rfIndex--;
    }
    if (this.xgBIndex > index) {
      this.xgBIndex--;
    }

    if (this.mlpANNIndex > index) {
      this.mlpANNIndex--;
    }

  }



}
