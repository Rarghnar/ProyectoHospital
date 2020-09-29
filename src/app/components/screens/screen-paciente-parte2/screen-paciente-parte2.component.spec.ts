import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPacienteParte2Component } from './screen-paciente-parte2.component';

describe('ScreenPacienteParte2Component', () => {
  let component: ScreenPacienteParte2Component;
  let fixture: ComponentFixture<ScreenPacienteParte2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenPacienteParte2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenPacienteParte2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
