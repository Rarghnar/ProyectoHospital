import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenInfoPacienteComponent } from './screen-info-paciente.component';

describe('ScreenInfoPacienteComponent', () => {
  let component: ScreenInfoPacienteComponent;
  let fixture: ComponentFixture<ScreenInfoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenInfoPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenInfoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
