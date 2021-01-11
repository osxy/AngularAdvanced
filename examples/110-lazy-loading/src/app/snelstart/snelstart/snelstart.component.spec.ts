import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnelstartComponent } from './snelstart.component';

describe('SnelstartComponent', () => {
  let component: SnelstartComponent;
  let fixture: ComponentFixture<SnelstartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnelstartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnelstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
