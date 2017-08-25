import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppSidebarComponent} from './sidebar/app.sidebar';
import {ChartModule} from 'angular2-chartjs';
import { GraphComponent } from './graph/graph.component';
import { NavigationComponent } from './navigation/navigation.component';
import {GraphDataService} from './graph/graph-data.service';

@NgModule({
  declarations: [
    AppComponent,
    AppSidebarComponent,
    GraphComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule
  ],
  providers: [GraphDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
