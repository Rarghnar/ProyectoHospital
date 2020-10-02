import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteCardNombreAdminComponent } from './paciente-card-nombre-admin.component';

describe('PacienteCardNombreAdminComponent', () => {
  let component: PacienteCardNombreAdminComponent;
  let fixture: ComponentFixture<PacienteCardNombreAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteCardNombreAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteCardNombreAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
