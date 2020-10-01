import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPaciente3Component } from './formulario-paciente3.component';

describe('FormularioPaciente3Component', () => {
  let component: FormularioPaciente3Component;
  let fixture: ComponentFixture<FormularioPaciente3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPaciente3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPaciente3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
