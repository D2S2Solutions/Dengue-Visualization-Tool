import { Component, OnInit } from '@angular/core';
import {MohToDistrictMapping} from '../services/MohToDistrictMapping';
import {PredictionDataService} from '../services/prediction-data.service';

@Component({
  selector: 'app-regression-timeline',
  templateUrl: './regression-timeline.component.html',
  styleUrls: ['./regression-timeline.component.css']
})
export class RegressionTimelineComponent implements OnInit {

  actualdataArray: any = [2,1,21,312,123,123,1,12,12,12,12,12,12,12,31,212,31,31,231];
  predictiondataArray: any = [8,10,45,112,133,70,49,18,18,32,34,19,21,23,31,70,61,41,161,130,78,99];
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

  mohsOfDistrict:any[]=[];
  districtList:any[]=[];
  moh:string;
  district:string;
  year:number=2017;


  constructor(private mohToDistrictMapper:MohToDistrictMapping,private predictionDataService:PredictionDataService) {
    let x = 0;
    for (; x < 52; x++) {
      this.labels[x] = x + 1;
    }
    // this.setGraphData();
    this.setDistrictList();

  }

  ngOnInit() {
  }

  setMohsOfDistrict(){
    this.mohsOfDistrict=this.mohToDistrictMapper.getMohsOfDistricts(this.district);
    if(this.mohsOfDistrict.length>0){
      this.moh=this.mohsOfDistrict[0];
    }
    this.getRegressionTimeline();
  }

  setDistrictList(){
    this.districtList=this.mohToDistrictMapper.getDistrictList();
    if(this.districtList.length>0) {
      this.district = this.districtList[0];
    }
    this.setMohsOfDistrict();
    // this.getRegressionTimeline();
  }


  getRegressionTimeline(){
    this.actualdataArray=[];
    this.predictiondataArray=[];
    // this.dataset.removeAll();
    this.predictionDataService.getRegressionTimeline(this.district,this.moh,this.year).subscribe(
      data=>{
        this.predictiondataArray=data.predictions;
        this.actualdataArray=data.actual;
        this.labels=data.week;
        this.setGraphData();
      },error=>{
        console.log(error);
      }
    );
  }


  public setGraphData() {
    this.dataset=[];

    this.dataset.push(
      {
        label: 'Actual',
        data: this.actualdataArray,
        pointBackgroundColor: 'Blue',
        borderColor: 'blue',
        pointRadius: 5,
        height: '800',
        backgroundColor: 'transparent',
        lineTension: 0
      });

    this.dataset.push(
      {
        label: 'Predicted',
        data: this.predictiondataArray,
        pointBackgroundColor: 'green',
        borderColor: '#d8732b',
        pointRadius: 5,
        height: '800',
        backgroundColor: 'transparent',
        lineTension: 0
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

  getAbsoluteValue(x,y){
    return Math.abs(x-y);
  }

}
