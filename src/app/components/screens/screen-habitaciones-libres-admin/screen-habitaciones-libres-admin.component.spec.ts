import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenHabitacionesLibresAdminComponent } from './screen-habitaciones-libres-admin.component';

describe('ScreenHabitacionesLibresAdminComponent', () => {
  let component: ScreenHabitacionesLibresAdminComponent;
  let fixture: ComponentFixture<ScreenHabitacionesLibresAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenHabitacionesLibresAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenHabitacionesLibresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
