import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerantwoordelijkeComponent } from './verantwoordelijke.component';

describe('VerantwoordelijkeComponent', () => {
  let component: VerantwoordelijkeComponent;
  let fixture: ComponentFixture<VerantwoordelijkeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerantwoordelijkeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerantwoordelijkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
