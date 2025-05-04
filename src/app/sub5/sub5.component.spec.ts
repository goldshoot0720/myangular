import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub5Component } from './sub5.component';

describe('Sub5Component', () => {
  let component: Sub5Component;
  let fixture: ComponentFixture<Sub5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sub5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sub5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
