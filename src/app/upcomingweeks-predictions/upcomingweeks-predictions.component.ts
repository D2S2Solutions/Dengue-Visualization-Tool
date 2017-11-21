import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PredictionDataService} from '../services/prediction-data.service';
import {MohToDistrictMapping} from '../services/MohToDistrictMapping';
import {ChartComponent} from 'angular2-chartjs';

@Component({
  selector: 'app-upcomingweeks-predictions',
  templateUrl: './upcomingweeks-predictions.component.html',
  styleUrls: ['./upcomingweeks-predictions.component.css']
})
export class UpcomingweeksPredictionsComponent implements OnInit,AfterViewInit {

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

  startDate:any;
  endDate:any;


  regressionGraphOptions = {
    backgroundColor: 'red',
    responsive: true,
    maintainAspectRatio: false,
    bezierCurve: false,
    showAllTooltips: false
  };


  // statModels:Array<Stat>=[];

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
  private districtList= [];

  constructor(private predictionDataService: PredictionDataService, private elementRef: ElementRef,
              private mohToDistrictMapper:MohToDistrictMapping) {

    // this.getStatistics();
    this.setDistrictList();
    this.getPredictions();
    // this.testFn();
  }


  setDistrictList() {
    this.districtList = this.mohToDistrictMapper.getDistrictList();

    // this.setMohsOfDistrict();
    // this.getRegressionTimeline();
  }

  // public getStatistics() {
  //   this.predictionDataService.getStat().subscribe(value=>{
  //     this.statModels=value.data;
  //   });
  // }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.chartContext = this.elementRef.nativeElement.querySelector('canvas').getContext('2d');
  }


  setWeek(week){
    this.startDate=week;
    this.endDate = parseInt(this.startDate)+1000*60*60*24*7;
    // let date = new Date(week);
    // date.setDate( date.getDate() + 3 );
    // this.endDate=date.getDate();
  }


  getPredictions() {
    this.regressionDataset = [];
    this.classificationDataset = [];
    this.regressionData = [];
    this.classificationData = [];
    this.regressionLabels = [];
    this.classificationLabels = [];
    this.predictionDataService.getCurrentPredictions(this.district, this.year)
      .subscribe(
        (response) => {
          const graphData = response.data;
          this.setWeek(response.week);
          for (let x = 0; x < graphData.length; x++) {
            this.regressionData.push(graphData[x].predictedCases);
            this.classificationData.push(graphData[x].predictedLevel);
            this.regressionLabels.push(graphData[x].mohName);
            this.classificationLabels.push(graphData[x].mohName);
          }


          this.regressionDataset.push(
            {
              label: '+3 weeks',
              backgroundColor: '#7095d1',
              data: this.regressionData,
            }
          );

          this.regressionDataset.push(
            {
              label: '+2 weeks',
              backgroundColor: '#0fa80a',
              data: [34,22,22],
            }
          );

          this.regressionDataset.push(
            {
              label: '+1 weeks',
              backgroundColor: '#c9830a',
              data: [64,21,22],
            }
          );

          this.classificationDataset.push(
            {
              label: '+3 weeks',
              backgroundColor: '#7095d1',
              data: this.classificationData,
            }
          );

          this.classificationDataset.push(
            {
              label: '+2 weeks',
              backgroundColor: '#0fa80a',
              data: [1,1,1],
            }
          );


          this.classificationDataset.push(
            {
              label: '+1 weeks',
              backgroundColor: '#c9830a',
              data: [1,2,1],
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
