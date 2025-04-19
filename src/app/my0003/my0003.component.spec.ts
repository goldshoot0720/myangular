import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My0003Component } from './my0003.component';

describe('My0003Component', () => {
  let component: My0003Component;
  let fixture: ComponentFixture<My0003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [My0003Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(My0003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
