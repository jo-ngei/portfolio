import { TestBed } from '@angular/core/testing';

import { KotlinService } from './kotlin.service';

describe('KotlinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KotlinService = TestBed.get(KotlinService);
    expect(service).toBeTruthy();
  });
});
