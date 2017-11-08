import { TestBed, inject } from '@angular/core/testing';

import { RusthuisserviceService } from './rusthuisservice.service';

describe('RusthuisserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RusthuisserviceService]
    });
  });

  it('should be created', inject([RusthuisserviceService], (service: RusthuisserviceService) => {
    expect(service).toBeTruthy();
  }));
});
