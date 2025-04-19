import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My0002Component } from './my0002.component';

describe('My0002Component', () => {
  let component: My0002Component;
  let fixture: ComponentFixture<My0002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [My0002Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(My0002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
