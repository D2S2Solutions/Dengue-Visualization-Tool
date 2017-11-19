import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppSidebarComponent} from './sidebar/app.sidebar';
import {ChartComponent, ChartModule} from 'angular2-chartjs';
import { GraphComponent } from './graph/graph.component';
import { NavigationComponent } from './navigation/navigation.component';
import {GraphDataService} from './services/graph-data.service';
import {DataEntryService} from './services/data-entry.service';
import { GraphClassificationComponent } from './graph-classification/graph-classification.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { MobHeatmapComponent } from './mob-heatmap/mob-heatmap.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RegressionTimelineComponent } from './regression-timeline/regression-timeline.component';
import { ClassificationTimelineComponent } from './classification-timeline/classification-timeline.component';
import { PredictionMapComponent } from './prediction-map/prediction-map.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { LoginComponent } from './login/login.component';
import {DataService} from './services/data.service';
import {LoggedInGuard} from './logged-in.guard';
import {UserService} from './services/user.service';
import {PathLocationStrategy} from '@angular/common';

const appRoutes: Routes = [
  { path: 'regression', component: GraphComponent },
  { path: 'classification', component: GraphClassificationComponent },
  { path: 'mobility', component: MobHeatmapComponent },
  { path: '', component: HomeComponentComponent,canActivate: [LoggedInGuard]},
  { path: 'regtimeline', component: RegressionTimelineComponent },
  { path: 'clastimeline', component: ClassificationTimelineComponent },
  { path: 'predictionMap', component: PredictionMapComponent },
  { path: 'dataentry', component: DataEntryComponent },
  { path: 'login', component: LoginComponent },
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
    LoginComponent,
    // TimelineComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true , preloadingStrategy: PreloadAllModules} // <-- debugging purposes only
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvHohFe2Dm4cVd1ZP81MUmCG7S-GTGt34'
    })
  ],

  providers: [DataService,GraphDataService,PredictionMapComponent,LoggedInGuard,UserService,DataEntryService],

  bootstrap: [AppComponent]
})
export class AppModule { }

