import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub11Component } from './sub11.component';

describe('Sub11Component', () => {
  let component: Sub11Component;
  let fixture: ComponentFixture<Sub11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sub11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sub11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
