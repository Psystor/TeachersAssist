/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PupilsService } from './pupils.service';

describe('PupilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PupilsService]
    });
  });

  it('should ...', inject([PupilsService], (service: PupilsService) => {
    expect(service).toBeTruthy();
  }));
});
