/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToturialComponent } from './toturial.component';

describe('ToturialComponent', () => {
  let component: ToturialComponent;
  let fixture: ComponentFixture<ToturialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToturialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToturialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
