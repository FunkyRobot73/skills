import { TestBed } from '@angular/core/testing';

import { SsuperService } from './ssuper.service';

describe('SsuperService', () => {
  let service: SsuperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsuperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
