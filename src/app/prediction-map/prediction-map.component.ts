import {Component, OnInit} from '@angular/core';
import {PredictionDataService} from '../services/prediction-data.service';
import {MohToDistrictMapping} from '../services/MohToDistrictMapping';

@Component({
  selector: 'app-prediction-map',
  templateUrl: './prediction-map.component.html',
  styleUrls: ['./prediction-map.component.css']
})
export class PredictionMapComponent implements OnInit {

  constructor(private predictionDataService: PredictionDataService,private mohToDistrictMapping:MohToDistrictMapping) {

    this.getPredictions();
  }

  lat: number = 6.91999267;
  lng: number = 79.86733114;
  zoom: number = 12;

  markers = [];

  district: string;
  year: number;


  ngOnInit() {
  }

  getPredictions() {
    this.markers = [];

    this.predictionDataService.getCurrentPredictions(this.district, this.year)
      .subscribe(
        (response) => {
          const graphData = JSON.parse(response).data;
          for (let x = 0; x < graphData.length; x++) {
            var markerOb = {name: '', predictedCases: '', predictedLevel: '', lat: 2, lng: 10};
            markerOb.name = graphData[x].mohName;
            markerOb.predictedLevel = graphData[x].predictedLevel;
            markerOb.predictedCases = graphData[x].predictedCases;
            let mohId = graphData[x].mohId;
            let locationArray=this.mohToDistrictMapping.getMohLocationArray(mohId);
            markerOb.lat = locationArray[0];
            markerOb.lng = locationArray[1];
            this.markers.push(markerOb);
          }


        },
        function (error) {
          alert('Error happened' + error);
        }
        // posts => this.annGraphData = posts,
      );
    // alert(this.annGraphData);
  }


}
