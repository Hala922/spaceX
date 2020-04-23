import { TestBed } from '@angular/core/testing';

import { RoketsService } from './rokets.service';

describe('RoketsService', () => {
  let service: RoketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
