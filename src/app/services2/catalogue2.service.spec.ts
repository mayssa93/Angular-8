import { TestBed } from '@angular/core/testing';

import { Catalogue2Service } from './catalogue2.service';

describe('Catalogue2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Catalogue2Service = TestBed.get(Catalogue2Service);
    expect(service).toBeTruthy();
  });
});
