import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSesionAdminComponent } from './navbar-sesion-admin.component';

describe('NavbarSesionAdminComponent', () => {
  let component: NavbarSesionAdminComponent;
  let fixture: ComponentFixture<NavbarSesionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSesionAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSesionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
