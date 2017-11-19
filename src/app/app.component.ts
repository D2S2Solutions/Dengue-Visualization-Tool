import {AfterViewInit, Component} from '@angular/core';
import {ChartModule} from 'angular2-chartjs';
import {ActivatedRoute, Router} from '@angular/router';

declare var fillValues: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  title = 'app works! heshan';
  public outputArray: JSON;
  currentUrl: string;

  isHidden = false;

  ngAfterViewInit() {
    // fillValues();
  }

  constructor() {
    // this.router.url.subscribe((url) => console.log(this.router.snapshot));
    // alert(router.url);
    if (window.location.href.includes('login')){
      this.isHidden=true;
    }
    // alert(window.location.href);
    // this.outputArray = <JSON>this.dataArray;
    // fillValues();
  }


}


