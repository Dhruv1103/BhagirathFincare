import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinplanningComponent } from './finplanning.component';

describe('FinplanningComponent', () => {
  let component: FinplanningComponent;
  let fixture: ComponentFixture<FinplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinplanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
