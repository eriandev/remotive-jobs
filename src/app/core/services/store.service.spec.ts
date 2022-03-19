import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs';

import { StoreService } from './store.service';

describe('StoreService', () => {
  let service: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    service = TestBed.inject(StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have obtain the store state as observable', () => {
    service
      .get$()
      .pipe(take(1))
      .subscribe((res) => expect(res).toEqual(null));
  });

  it('should have modify the store state', () => {
    const newState = 'frontend developer';
    service.set(newState);
    service
      .get$()
      .pipe(take(1))
      .subscribe((res) => expect(res).toEqual(newState));
  });
});
