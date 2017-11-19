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

    // private week:number;
    // private cases:number;
    // private minTemp:number;
    // private maxTemp:number;
    // private meanTemp:number;
    // private precipitation:number;
    // private ndvi:number;

    private model:WeekData;
    private editedWeek:number;

    constructor(private dataEntryService:DataEntryService) {
        // dataEntryService.getLastWeek();
        this.model = new WeekData(1,null,null,null,null,null,null);
    }

      ngOnInit() {

      }

  private onSubmit(f: NgForm) {
    console.log(f.value);
    this.editedWeek = f.value.week;
    alert('Successfully added data of week'+this.editedWeek);
    this.model = new WeekData(this.editedWeek+1,null,null,null,null,null,null)
    // console.log(f.);
  }
}
