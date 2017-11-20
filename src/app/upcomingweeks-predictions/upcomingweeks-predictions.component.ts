import { Component, OnInit } from '@angular/core';
import {PredictionDataService} from '../services/prediction-data.service';

@Component({
  selector: 'app-upcomingweeks-predictions',
  templateUrl: './upcomingweeks-predictions.component.html',
  styleUrls: ['./upcomingweeks-predictions.component.css']
})
export class UpcomingweeksPredictionsComponent implements OnInit {


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


  options = {
    backgroundColor: 'red',
    responsive: true,
    maintainAspectRatio: false,
    bezierCurve: false,
    showAllTooltips: false
  };


  district: string = "0";
  year: number =2017;

  graphData = [];

  constructor(private predictionDataService: PredictionDataService) {

    this.getStatistics();
    // this.getPredictions();
    this.testFn();
  }


  public getStatistics() {

  }

  ngOnInit() {
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
              label: "+3 weeks",
              backgroundColor: '#8db0e8',
              data: this.regressionData,
            }
          );

          this.classificationDataset.push(
            {
              label: "+3 weeks",
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
      labels: ["MC-Colombo","Dehiwala","Kandy","Rathnapura","Galle",
        "MC-Colombo","Dehiwala","Kandy","Rathnapura","Galle",
        "MC-Colombo","Dehiwala","Kandy","Rathnapura","Galle",
        "MC-Colombo","Dehiwala","Kandy","Rathnapura","Galle"],
      datasets: [
        {
          label: "Next Week",
          backgroundColor: '#8db0e8',
          data: [150,70,4,23,22,10,150,70,4,23,22,10,150,70,4,23,22,10,150,70,4,23,22,10,],
        },
        {
          label: "+2 Weeks",
          backgroundColor: "#4b6ca0",
          data: [100,63,5,14,33,100,63,5,14,33,100,63,5,14,33,100,63,5,14,33,]
        },
        {
          label: "+3 Weeks",
          backgroundColor: "green",
          data: [114,53,5,14,33,114,53,5,14,33,114,53,5,14,33,114,53,5,14,33,]
        }
      ]
    };

    this.classificationGraphData = {
      labels: ['MC-Colombo', 'Dehiwala', 'Kandy', 'Rathnapura', 'Galle'],
      datasets: [
        {
          label: 'Next Week',
          backgroundColor: '#8db0e8',
          data: [4, 4, 1, 2, 1,]
        },
        {
          label: '+2 Weeks',
          backgroundColor: '#4b6ca0',
          data: [3, 3, 1, 1, 2,]
        },
        {
          label: '+3 Weeks',
          backgroundColor: 'green',
          data: [4, 3, 1, 1, 2,]
        }
      ]
    };
  }
}
