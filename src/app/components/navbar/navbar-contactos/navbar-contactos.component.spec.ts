import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarContactosComponent } from './navbar-contactos.component';

describe('NavbarContactosComponent', () => {
  let component: NavbarContactosComponent;
  let fixture: ComponentFixture<NavbarContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarContactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
