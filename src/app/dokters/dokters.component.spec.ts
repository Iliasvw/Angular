import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoktersComponent } from './dokters.component';

describe('DoktersComponent', () => {
  let component: DoktersComponent;
  let fixture: ComponentFixture<DoktersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoktersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoktersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
