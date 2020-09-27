import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenHabitacionesComponent } from './screen-habitaciones.component';

describe('ScreenHabitacionesComponent', () => {
  let component: ScreenHabitacionesComponent;
  let fixture: ComponentFixture<ScreenHabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenHabitacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
