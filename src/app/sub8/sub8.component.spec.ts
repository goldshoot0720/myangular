import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub8Component } from './sub8.component';

describe('Sub8Component', () => {
  let component: Sub8Component;
  let fixture: ComponentFixture<Sub8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sub8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sub8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
