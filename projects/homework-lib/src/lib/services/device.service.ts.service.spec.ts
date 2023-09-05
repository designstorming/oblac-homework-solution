import { TestBed } from '@angular/core/testing';

import { DeviceServiceTsService } from './device.service.ts.service';

describe('DeviceServiceTsService', () => {
  let service: DeviceServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
