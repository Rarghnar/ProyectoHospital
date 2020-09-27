import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAgregarMedicoComponent } from './screen-agregar-medico.component';

describe('ScreenAgregarMedicoComponent', () => {
  let component: ScreenAgregarMedicoComponent;
  let fixture: ComponentFixture<ScreenAgregarMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenAgregarMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenAgregarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
