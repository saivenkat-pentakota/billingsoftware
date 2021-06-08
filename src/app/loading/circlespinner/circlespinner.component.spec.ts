import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclespinnerComponent } from './circlespinner.component';

describe('CirclespinnerComponent', () => {
  let component: CirclespinnerComponent;
  let fixture: ComponentFixture<CirclespinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirclespinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclespinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
