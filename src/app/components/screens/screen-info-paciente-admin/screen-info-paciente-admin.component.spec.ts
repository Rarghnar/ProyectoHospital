import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenInfoPacienteAdminComponent } from './screen-info-paciente-admin.component';

describe('ScreenInfoPacienteAdminComponent', () => {
  let component: ScreenInfoPacienteAdminComponent;
  let fixture: ComponentFixture<ScreenInfoPacienteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenInfoPacienteAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenInfoPacienteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
