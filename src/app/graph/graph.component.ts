import {Component, OnInit} from '@angular/core';
import {GraphDataService} from '../services/graph-data.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  dataArray: any = [[1, 3], [2, 14.01], [3.5, 3.14]];
  type = 'line';

  annGraphData: any[] = [1, 2, 3
    , 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  lassoGraphData: any[];
  xgBootstGraphData: any[];
  catBoostGraphData: any[];
  MLPANNGraphData: any[];
  KerasDLGraphData: any[];
  actualGraphData: any[];

  data: any;
  labels: any[] = [];
  dataset: any[] = [];

  xgBIndex: number = -1;
  catBIndex: number = -1;
  lassoIndex: number = -1;
  mlpANNIndex: number = -1;
  kerasDLIndex: number = -1;


  options = {
    backgroundColor: 'red',
    responsive: true,
    maintainAspectRatio: false,
    bezierCurve: false
  };
  private errorMessage: any;

  private moh='69';

  constructor(private graphService: GraphDataService) {

    this.getPosts();

    // this.setGraphData();
    // setTimeout(() => this.setGraphData(), 4000 );

  }

  ngOnInit() {
  }

  getPosts() {
    // alert('calling backend');
    // this.graphService.getPosts().map(data => this.annGraphData = data);
    this.graphService.getResults(this.moh)
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
              lineTension: 0
            });
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
    console.log('settting graph data' + this.actualGraphData);
    console.log(this.dataset);

    let x = 0;
    for (; x < this.actualGraphData.length; x++) {
      this.labels[x] = x + 1;
    }

    this.data = {
      labels: this.labels,
      datasets: this.dataset,
      borderColor: [
        'rgba(255,99,132,1)'
      ],
      borderWidth: 1,

    };

  }

  public setXGBData(event) {
    const target = <HTMLInputElement> event.target || event.srcElement || event.currentTarget;
    const isChecked = target.checked;
    if (isChecked) {
      this.graphService.getXGBResults(this.moh)
        .subscribe(
          (response) => {
            // this.annGraphData = response.ann;
            this.xgBootstGraphData = response.predictions;
            this.xgBIndex = this.dataset.length;
            this.dataset.push({
              label: 'XGBoost',
              data: this.xgBootstGraphData,
              pointBackgroundColor: '#3bd66f',
              borderColor: '#57cc7e',
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
      this.dataset.splice(this.xgBIndex, 1);
      this.reorganizeIndexes(this.xgBIndex);
      this.setGraphData();
    }
  }


  public setLassoData(event) {
    const target = <HTMLInputElement> event.target || event.srcElement || event.currentTarget;
    const isChecked = target.checked;
    if (isChecked) {
      this.graphService.getLassoResults(this.moh)
        .subscribe(
          (response) => {
            // this.annGraphData = response.ann;
            this.lassoGraphData = response.predictions;
            this.lassoIndex = this.dataset.length;
            this.dataset.push({
              label: 'Lasso',
              data: this.lassoGraphData,
              pointBackgroundColor: '#f20989',
              borderColor: '#ef77b9',
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
      this.dataset.splice(this.lassoIndex, 1);
      this.reorganizeIndexes(this.lassoIndex);
      this.setGraphData();

    }

  }


  public setCatBoostData(event) {
    const target = <HTMLInputElement> event.target || event.srcElement || event.currentTarget;
    const isChecked = target.checked;
    if (isChecked) {
      this.graphService.getCatBoostResults(this.moh)
        .subscribe(
          (response) => {
            // this.annGraphData = response.ann;
            this.catBoostGraphData = response.predictions;
            this.catBIndex = this.dataset.length;
            this.dataset.push({
              label: 'CatBoost',
              data: this.catBoostGraphData,
              pointBackgroundColor: '#d83c08',
              borderColor: '#ed754e',
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
      this.dataset.splice(this.catBIndex, 1);
      this.reorganizeIndexes(this.catBIndex);
      this.setGraphData();

    }

  }

  public setMLPANNData(event) {
    const target = <HTMLInputElement> event.target || event.srcElement || event.currentTarget;
    const isChecked = target.checked;
    if (isChecked) {
      this.graphService.getMLPANNResults(this.moh)
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

  public setKerasDLData(event) {
    const target = <HTMLInputElement> event.target || event.srcElement || event.currentTarget;
    const isChecked = target.checked;
    if (isChecked) {
      this.graphService.getKerasDLResults(this.moh)
        .subscribe(
          (response) => {
            // this.annGraphData = response.ann;
            this.KerasDLGraphData = response.predictions;
            this.kerasDLIndex = this.dataset.length;
            this.dataset.push({
              label: 'ANN-DL',
              data: this.KerasDLGraphData,
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
      this.dataset.splice(this.kerasDLIndex, 1);
      this.reorganizeIndexes(this.kerasDLIndex);
      this.setGraphData();

    }
  }

  private reorganizeIndexes(index) {
    if (this.lassoIndex > index) {
      this.lassoIndex--;
    }
    if (this.xgBIndex > index) {
      this.xgBIndex--;
    }

    if (this.catBIndex > index) {
      this.catBIndex--;
    }
    if (this.mlpANNIndex > index) {
      this.mlpANNIndex--;
    }
    if (this.kerasDLIndex > index) {
      this.kerasDLIndex--;
    }
  }

}

