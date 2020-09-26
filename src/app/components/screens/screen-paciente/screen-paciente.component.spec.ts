import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPacienteComponent } from './screen-paciente.component';

describe('ScreenPacienteComponent', () => {
  let component: ScreenPacienteComponent;
  let fixture: ComponentFixture<ScreenPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
