import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenHabitacionesLibresComponent } from './screen-habitaciones-libres.component';

describe('ScreenHabitacionesLibresComponent', () => {
  let component: ScreenHabitacionesLibresComponent;
  let fixture: ComponentFixture<ScreenHabitacionesLibresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenHabitacionesLibresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenHabitacionesLibresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
