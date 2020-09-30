import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPacienteAdminComponent } from './screen-paciente-admin.component';

describe('ScreenPacienteAdminComponent', () => {
  let component: ScreenPacienteAdminComponent;
  let fixture: ComponentFixture<ScreenPacienteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenPacienteAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenPacienteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
