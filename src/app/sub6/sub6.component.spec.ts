import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub6Component } from './sub6.component';

describe('Sub6Component', () => {
  let component: Sub6Component;
  let fixture: ComponentFixture<Sub6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sub6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sub6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
