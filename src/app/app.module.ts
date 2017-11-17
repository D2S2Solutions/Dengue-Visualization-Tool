import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppSidebarComponent} from './sidebar/app.sidebar';
import {ChartModule} from 'angular2-chartjs';
import { GraphComponent } from './graph/graph.component';
import { NavigationComponent } from './navigation/navigation.component';
import {GraphDataService} from './services/graph-data.service';
import { GraphClassificationComponent } from './graph-classification/graph-classification.component';
import {RouterModule, Routes} from '@angular/router';
import { MobHeatmapComponent } from './mob-heatmap/mob-heatmap.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RegressionTimelineComponent } from './regression-timeline/regression-timeline.component';
import { ClassificationTimelineComponent } from './classification-timeline/classification-timeline.component';
import { PredictionMapComponent } from './prediction-map/prediction-map.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

const appRoutes: Routes = [
  { path: 'regression', component: GraphComponent },
  { path: 'classification', component: GraphClassificationComponent },
  { path: 'mobility', component: MobHeatmapComponent },
  { path: '', component: HomeComponentComponent },
  { path: 'regtimeline', component: RegressionTimelineComponent },
  { path: 'clastimeline', component: ClassificationTimelineComponent },
  { path: 'predictionMap', component: PredictionMapComponent },
  { path: 'dataentry', component: DataEntryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AppSidebarComponent,
    GraphComponent,
    NavigationComponent,
    GraphClassificationComponent,
    MobHeatmapComponent,
    HomeComponentComponent,
    RegressionTimelineComponent,
    ClassificationTimelineComponent,
    RegressionTimelineComponent,
    ClassificationTimelineComponent,
    PredictionMapComponent,
    DataEntryComponent,
    // TimelineComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvHohFe2Dm4cVd1ZP81MUmCG7S-GTGt34'
    })
  ],
  providers: [GraphDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

