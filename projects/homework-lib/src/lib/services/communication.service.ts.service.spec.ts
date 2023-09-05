import { TestBed } from '@angular/core/testing';

import { CommunicationServiceTsService } from './communication.service.ts.service';

describe('CommunicationServiceTsService', () => {
  let service: CommunicationServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
