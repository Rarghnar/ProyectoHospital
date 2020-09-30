import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenHabitacionesAdminComponent } from './screen-habitaciones-admin.component';

describe('ScreenHabitacionesAdminComponent', () => {
  let component: ScreenHabitacionesAdminComponent;
  let fixture: ComponentFixture<ScreenHabitacionesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenHabitacionesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenHabitacionesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
