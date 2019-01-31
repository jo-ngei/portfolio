import { TestBed } from '@angular/core/testing';

import { JavafxService } from './javafx.service';

describe('JavafxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JavafxService = TestBed.get(JavafxService);
    expect(service).toBeTruthy();
  });
});
