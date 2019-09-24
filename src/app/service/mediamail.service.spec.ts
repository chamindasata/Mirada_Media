import { TestBed } from '@angular/core/testing';

import { MediamailService } from './mediamail.service';

describe('MediamailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediamailService = TestBed.get(MediamailService);
    expect(service).toBeTruthy();
  });
});
