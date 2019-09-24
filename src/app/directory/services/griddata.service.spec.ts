import { TestBed } from '@angular/core/testing';

import { GriddataService } from './griddata.service';

describe('GriddataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GriddataService = TestBed.get(GriddataService);
    expect(service).toBeTruthy();
  });
});
