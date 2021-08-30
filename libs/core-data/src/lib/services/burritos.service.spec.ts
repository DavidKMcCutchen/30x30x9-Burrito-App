import { TestBed } from '@angular/core/testing';

import { BurritosService } from './burritos.service';

describe('BurritosService', () => {
  let service: BurritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
