import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub7Component } from './sub7.component';

describe('Sub7Component', () => {
  let component: Sub7Component;
  let fixture: ComponentFixture<Sub7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sub7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sub7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
