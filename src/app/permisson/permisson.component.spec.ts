/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PermissonComponent } from './permisson.component';

describe('PermissonComponent', () => {
  let component: PermissonComponent;
  let fixture: ComponentFixture<PermissonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
