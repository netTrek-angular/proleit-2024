import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { contactResolver } from './contact.resolver';

describe('contactResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => contactResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
