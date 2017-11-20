import { Component, OnInit, NgZone } from '@angular/core';
import {DataEntryService} from '../services/data-entry.service';
import {NgForm} from '@angular/forms';
import {MohToDistrictMapping} from '../services/MohToDistrictMapping';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

    // private model:WeekData;
    private mohId:string;
    private week:number;
    private cases:number;
    private minTemp:number;
    private maxTemp:number;
    private meanTemp:number;
    private precipitation:number;
    private ndvi:number;

    private sendingForm:any;
    private editedWeek:number;
    private isDataAvailable = false;

    mohsOfDistrict:any[]=[];
    districtList:any[]=[];
    moh:string;
    district:string;
    year=2017;
    constructor(private mohToDistrictMapper:MohToDistrictMapping, private dataEntryService:DataEntryService) {
        // this.getLastWeek();
        this.setDistrictList();
        console.log('ON Initi');
    }

      ngOnInit() {
      }
  private onSubmit(form: NgForm, event:Event) {
      // event.preventDefault();
      console.log('sending data');
      console.log(form.value);
      this.editedWeek = form.value.week;
      this.sendingForm = {'mohID':+this.moh,
                            'week':this.week,
                            'cases':this.cases,
                            'minTemp':this.minTemp,
                            'maxTemp':this.maxTemp,
                            'meanTemp':this.meanTemp,
                            'precipitation':this.precipitation,
                            'ndvi':this.ndvi};
      console.log('sending form');
      console.log(this.sendingForm);
      this.sendWeekData(this.sendingForm);
  }

  private getLastWeek() {
      this.dataEntryService.getLastWeek(this.moh)
          .subscribe(
              (response) => {
                  console.log('RESPONSE');
                  console.log(response.weekNo);
                  this.week = response.weekNo+1;
                  this.isDataAvailable =true;
              },
              function (error) {
                  alert('Error happened in getting last week; Error: ' + error);
              }
          );
  }
  private sendWeekData(form:any) {
      console.log('Sending data');
      this.dataEntryService.sendWeekData(form)
          .subscribe(
              (response) => {
                  console.log('Successfully added');
                  alert('Successfully added data of week '+ response.message);
                  this.week = this.editedWeek+1;
                  this.cases = null;
                  this.minTemp = null;
                  this.maxTemp = null;
                  this.meanTemp = null;
                  this.precipitation = null;
                  this.ndvi = null;
              },
              function (error) {
                  alert('Error happened in submitting data; Error: ' + error);
                  this.week = this.editedWeek;
                  this.cases = null;
                  this.minTemp = null;
                  this.maxTemp = null;
                  this.meanTemp = null;
                  this.precipitation = null;
                  this.ndvi = null;
              }
          );
  }
  private setMohsOfDistrict() {
        this.mohsOfDistrict=this.mohToDistrictMapper.getMohsOfDistricts(this.district);
        if(this.mohsOfDistrict.length>0) {
            this.moh=this.mohsOfDistrict[0];
        }
        this.getLastWeek();
    }

  private setDistrictList() {
        this.districtList=this.mohToDistrictMapper.getDistrictList();
        if(this.districtList.length>0) {
            this.district = this.districtList[0];
        }
        this.setMohsOfDistrict();
        // this.getRegressionTimeline();
    }
}
