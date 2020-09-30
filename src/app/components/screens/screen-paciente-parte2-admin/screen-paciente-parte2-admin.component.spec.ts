import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPacienteParte2AdminComponent } from './screen-paciente-parte2-admin.component';

describe('ScreenPacienteParte2AdminComponent', () => {
  let component: ScreenPacienteParte2AdminComponent;
  let fixture: ComponentFixture<ScreenPacienteParte2AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenPacienteParte2AdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenPacienteParte2AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
