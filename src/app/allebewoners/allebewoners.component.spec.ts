import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllebewonersComponent } from './allebewoners.component';

describe('AllebewonersComponent', () => {
  let component: AllebewonersComponent;
  let fixture: ComponentFixture<AllebewonersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllebewonersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllebewonersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
