import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroInicioSesionAdmComponent } from './cuadro-inicio-sesion-adm.component';

describe('CuadroInicioSesionAdmComponent', () => {
  let component: CuadroInicioSesionAdmComponent;
  let fixture: ComponentFixture<CuadroInicioSesionAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroInicioSesionAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadroInicioSesionAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
