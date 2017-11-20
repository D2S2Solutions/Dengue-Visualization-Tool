import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GraphDataService} from '../services/graph-data.service';
import {ChartComponent} from 'angular2-chartjs';
import {PredictionDataService} from '../services/prediction-data.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})

export class HomeComponentComponent implements OnInit, AfterViewInit {

  @ViewChild(ChartComponent) chart: ChartComponent;
  @ViewChild(ChartComponent) canvas: ElementRef;
  dataArray: any = [[1, 3], [2, 14.01], [3.5, 3.14]];
  type = 'bar';

  regressionLabels: any[] = [];
  classificationLabels: any[] = [];

  regressionDataset: any[] = [];
  regressionData: any[] = [];

  classificationDataset: any[] = [];
  classificationData: any[] = [];

  regressionGraphData: any = [];
  classificationGraphData: any = [];


  regressionGraphOptions = {
    backgroundColor: 'red',
    responsive: true,
    maintainAspectRatio: false,
    bezierCurve: false,
    showAllTooltips: false
  };

  classificationGraphOptions = {
    backgroundColor: 'red',
    responsive: true,
    maintainAspectRatio: false,
    bezierCurve: false,
    showAllTooltips: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function (value) {
            if (Number.isInteger(value)) {
              return value;
            }
          },
          stepSize: 1
        }
      }]
    },
    animation: {
      onComplete: function () {
      }
    }
  };


  district = '0';
  year = 2017;

  graphData = [];
  private chartContext: CanvasRenderingContext2D | any;

  constructor(private predictionDataService: PredictionDataService, private elementRef: ElementRef) {

    this.getStatistics();
    // this.getPredictions();
    this.testFn();
  }


  public getStatistics() {

  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.chartContext = this.elementRef.nativeElement.querySelector('canvas').getContext('2d');
  }


    getPredictions() {
      this.predictionDataService.getCurrentPredictions(this.district, this.year)
        .subscribe(
          (response) => {
            // this.annGraphData = response.ann;
            const graphData = response.predictions;

            for (let x; x < graphData.length; x++) {
              this.regressionData.push(graphData[x].prediictedCases);
              this.classificationData.push(graphData[x].predictedLevels);
              this.regressionLabels.push(graphData[x].mohName);
            }

            this.regressionDataset.push(
              {
                label: '+3 weeks',
                backgroundColor: '#8db0e8',
                data: this.regressionData,
              }
            );

            this.classificationDataset.push(
              {
                label: '+3 weeks',
                backgroundColor: '#8db0e8',
                data: this.classificationData,
              }
            );


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
      this.regressionGraphData = {
        labels: this.regressionLabels,
        datasets: this.regressionDataset,
        borderColor: [
          'rgba(255,99,132,1,)'
        ],
        borderWidth: 1,
      };

      this.classificationGraphData = {
        labels: this.classificationLabels,
        datasets: this.classificationDataset,
        borderColor: [
          'rgba(255,99,132,1,)'
        ],
        borderWidth: 1,
      };

    }


  public testFn() {
      this.regressionGraphData = {
        labels: ['MC-Colombo', 'Dehiwala', 'Kandy', 'Rathnapura'],
        datasets: [
          {
            label: '+3 Weeks',
            backgroundColor: 'green',
            data: [114, 53, 5, 14]
          }
        ]
      };

      this.classificationGraphData = {
        labels: ['MC-Colombo', 'Dehiwala', 'Kandy', 'Rathnapura', 'Galle'],
        datasets: [
          {
            label: '+3 Weeks',
            backgroundColor: '#8db0e8',
            data: [4, 3, 1, 1, 2,]
          }
        ]
      };
    }

  }

