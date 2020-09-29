import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPaciente2Component } from './formulario-paciente2.component';

describe('FormularioPaciente2Component', () => {
  let component: FormularioPaciente2Component;
  let fixture: ComponentFixture<FormularioPaciente2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPaciente2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPaciente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
