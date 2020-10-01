import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenListaPacientesAdminComponent } from './screen-lista-pacientes-admin.component';

describe('ScreenListaPacientesAdminComponent', () => {
  let component: ScreenListaPacientesAdminComponent;
  let fixture: ComponentFixture<ScreenListaPacientesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenListaPacientesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenListaPacientesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
