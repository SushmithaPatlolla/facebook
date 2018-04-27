import { TestBed, async, inject } from '@angular/core/testing';

import { AuuthGuard } from './auuth.guard';

describe('AuuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuuthGuard]
    });
  });

  it('should ...', inject([AuuthGuard], (guard: AuuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
