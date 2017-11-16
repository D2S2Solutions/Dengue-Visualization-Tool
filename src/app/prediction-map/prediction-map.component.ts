import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prediction-map',
  templateUrl: './prediction-map.component.html',
  styleUrls: ['./prediction-map.component.css']
})
export class PredictionMapComponent implements OnInit {

  constructor() { }

  lat: number = 6.91999267;
  lng: number = 79.86733114;
  zoom : number = 12;

  markers =[{
    lat:6.91999267,
    lng:79.86733114,
  },{
    lat:6.858409663,
    lng:79.87577179,
  }];

  ngOnInit() {
  }

}
