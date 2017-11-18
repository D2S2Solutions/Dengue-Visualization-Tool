/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PredictionDataService } from './prediction-data.service';

describe('PredictionDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PredictionDataService]
    });
  });

  it('should ...', inject([PredictionDataService], (service: PredictionDataService) => {
    expect(service).toBeTruthy();
  }));
});
