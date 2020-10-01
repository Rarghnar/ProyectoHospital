import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenListaPacientesComponent } from './screen-lista-pacientes.component';

describe('ScreenListaPacientesComponent', () => {
  let component: ScreenListaPacientesComponent;
  let fixture: ComponentFixture<ScreenListaPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenListaPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenListaPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
