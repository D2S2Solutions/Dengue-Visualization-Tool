import { Component, OnInit } from '@angular/core';
import {DataEntryService} from '../services/data-entry.service';
import {WeekData} from '../services/WeekData';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

    private model:WeekData;
    private editedWeek:number;
    private isDataAvailable = false;
    constructor(private dataEntryService:DataEntryService) {
    }

      ngOnInit() {
          this.getLastWeek();
      }

  private onSubmit(form: NgForm) {
    console.log(form.value);
    this.editedWeek = form.value.week;
    this.sendWeekData(form);
  }

  private getLastWeek() {
      this.dataEntryService.getLastWeek()
          .subscribe(
              (response) => {
                  // this.annGraphData = response.ann;
                  // this.actualGraphData = response.startingDate;
                  this.model = new WeekData(response.weekNO,null,null,null,null,null,null);
                  this.isDataAvailable =true;
              },
              function (error) {
                  alert('Error happened ' + error);
              }
          );
  }
  private sendWeekData(form:NgForm) {
      this.dataEntryService.sendWeekData(form)
          .subscribe(
              (response) => {
                  alert('Successfully added data of week '+ response.message);
                  this.model = new WeekData(this.editedWeek+1,null,null,null,null,null,null);
              },
              function (error) {
                  alert('Error happened TRY AGAIN ' + error);
                  this.model = new WeekData(this.editedWeek,null,null,null,null,null,null);
              }
          );
  }
}
