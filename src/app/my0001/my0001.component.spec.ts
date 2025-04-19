import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My0001Component } from './my0001.component';

describe('My0001Component', () => {
  let component: My0001Component;
  let fixture: ComponentFixture<My0001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [My0001Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(My0001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
