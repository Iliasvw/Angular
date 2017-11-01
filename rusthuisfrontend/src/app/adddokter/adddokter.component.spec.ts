import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddokterComponent } from './adddokter.component';

describe('AdddokterComponent', () => {
  let component: AdddokterComponent;
  let fixture: ComponentFixture<AdddokterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddokterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddokterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
