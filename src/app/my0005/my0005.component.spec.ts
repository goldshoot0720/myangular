import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My0005Component } from './my0005.component';

describe('My0005Component', () => {
  let component: My0005Component;
  let fixture: ComponentFixture<My0005Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [My0005Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(My0005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
