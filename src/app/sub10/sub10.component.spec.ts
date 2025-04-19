import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub10Component } from './sub10.component';

describe('Sub10Component', () => {
  let component: Sub10Component;
  let fixture: ComponentFixture<Sub10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sub10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sub10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
