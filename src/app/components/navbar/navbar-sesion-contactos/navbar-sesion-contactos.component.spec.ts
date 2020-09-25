import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSesionContactosComponent } from './navbar-sesion-contactos.component';

describe('NavbarSesionContactosComponent', () => {
  let component: NavbarSesionContactosComponent;
  let fixture: ComponentFixture<NavbarSesionContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSesionContactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSesionContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
