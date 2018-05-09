import { TestBed, inject } from '@angular/core/testing';

import { PeersService } from './peers.service';

describe('PeersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeersService]
    });
  });

  it('should be created', inject([PeersService], (service: PeersService) => {
    expect(service).toBeTruthy();
  }));
});
