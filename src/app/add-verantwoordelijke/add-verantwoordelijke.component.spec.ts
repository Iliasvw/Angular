import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVerantwoordelijkeComponent } from './add-verantwoordelijke.component';

describe('AddVerantwoordelijkeComponent', () => {
  let component: AddVerantwoordelijkeComponent;
  let fixture: ComponentFixture<AddVerantwoordelijkeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVerantwoordelijkeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVerantwoordelijkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
