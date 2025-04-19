import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub9Component } from './sub9.component';

describe('Sub9Component', () => {
  let component: Sub9Component;
  let fixture: ComponentFixture<Sub9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sub9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sub9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
