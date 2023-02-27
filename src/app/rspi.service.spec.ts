import { TestBed } from '@angular/core/testing';

import { RspiService } from './rspi.service';

describe('RspiService', () => {
  let service: RspiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RspiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
