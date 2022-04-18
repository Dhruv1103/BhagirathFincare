import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotstockComponent } from './hotstock.component';

describe('HotstockComponent', () => {
  let component: HotstockComponent;
  let fixture: ComponentFixture<HotstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
