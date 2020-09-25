import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSesionIniciadaComponent } from './navbar-sesion-iniciada.component';

describe('NavbarSesionIniciadaComponent', () => {
  let component: NavbarSesionIniciadaComponent;
  let fixture: ComponentFixture<NavbarSesionIniciadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSesionIniciadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSesionIniciadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
