import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnelStartComponent } from './snel-start.component';

describe('SnelStartComponent', () => {
  let component: SnelStartComponent;
  let fixture: ComponentFixture<SnelStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnelStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnelStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
