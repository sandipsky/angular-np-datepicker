import { TestBed } from '@angular/core/testing';

import { NgxNepaliDatepickerService } from './ngx-nepali-datepicker.service';

describe('NgxNepaliDatepickerService', () => {
  let service: NgxNepaliDatepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNepaliDatepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
