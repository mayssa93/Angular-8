import { TestBed } from '@angular/core/testing';

import { Catalogue1Service } from './catalogue1.service';

describe('Catalogue1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Catalogue1Service = TestBed.get(Catalogue1Service);
    expect(service).toBeTruthy();
  });
});
