import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenHomeIngresadoComponent } from './screen-home-ingresado.component';

describe('ScreenHomeIngresadoComponent', () => {
  let component: ScreenHomeIngresadoComponent;
  let fixture: ComponentFixture<ScreenHomeIngresadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenHomeIngresadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenHomeIngresadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
