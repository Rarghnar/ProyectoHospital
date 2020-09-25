import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSesionAcercaDeComponent } from './navbar-sesion-acerca-de.component';

describe('NavbarSesionAcercaDeComponent', () => {
  let component: NavbarSesionAcercaDeComponent;
  let fixture: ComponentFixture<NavbarSesionAcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSesionAcercaDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSesionAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
