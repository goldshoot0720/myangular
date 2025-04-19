import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My0004Component } from './my0004.component';

describe('My0004Component', () => {
  let component: My0004Component;
  let fixture: ComponentFixture<My0004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [My0004Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(My0004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
