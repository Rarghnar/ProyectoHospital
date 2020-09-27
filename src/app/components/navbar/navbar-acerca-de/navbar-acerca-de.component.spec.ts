import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAcercaDeComponent } from './navbar-acerca-de.component';

describe('NavbarAcercaDeComponent', () => {
  let component: NavbarAcercaDeComponent;
  let fixture: ComponentFixture<NavbarAcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAcercaDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
