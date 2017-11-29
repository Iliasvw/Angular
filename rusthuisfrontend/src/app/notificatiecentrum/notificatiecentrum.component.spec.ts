import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificatiecentrumComponent } from './notificatiecentrum.component';

describe('NotificatiecentrumComponent', () => {
  let component: NotificatiecentrumComponent;
  let fixture: ComponentFixture<NotificatiecentrumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificatiecentrumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificatiecentrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
