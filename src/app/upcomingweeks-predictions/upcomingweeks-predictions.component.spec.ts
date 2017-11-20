import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingweeksPredictionsComponent } from './upcomingweeks-predictions.component';

describe('UpcomingweeksPredictionsComponent', () => {
  let component: UpcomingweeksPredictionsComponent;
  let fixture: ComponentFixture<UpcomingweeksPredictionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingweeksPredictionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingweeksPredictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
