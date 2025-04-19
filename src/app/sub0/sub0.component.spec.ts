import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub0Component } from './sub0.component';

describe('Sub0Component', () => {
  let component: Sub0Component;
  let fixture: ComponentFixture<Sub0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sub0Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sub0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
