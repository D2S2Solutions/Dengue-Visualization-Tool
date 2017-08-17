import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app works! heshan';
  public outputArray: JSON ;
  dataArray: any = [[1, 3], [2, 14.01], [3.5, 3.14]];

  constructor () {
    // this.outputArray = <JSON>this.dataArray;
  }

}
