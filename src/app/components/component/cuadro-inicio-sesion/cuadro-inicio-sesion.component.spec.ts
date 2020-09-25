import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroInicioSesionComponent } from './cuadro-inicio-sesion.component';

describe('CuadroInicioSesionComponent', () => {
  let component: CuadroInicioSesionComponent;
  let fixture: ComponentFixture<CuadroInicioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroInicioSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadroInicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
