import { Component, OnInit } from '@angular/core';
import {DataEntryService} from '../services/data-entry.service';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  constructor(private dataEntryService:DataEntryService) { }

  ngOnInit() {
  }

}
