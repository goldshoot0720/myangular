import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My0000Component } from './my0000.component';

describe('My0000Component', () => {
  let component: My0000Component;
  let fixture: ComponentFixture<My0000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [My0000Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(My0000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
