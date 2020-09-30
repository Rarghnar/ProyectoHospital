import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPacienteParte3AdminComponent } from './screen-paciente-parte3-admin.component';

describe('ScreenPacienteParte3AdminComponent', () => {
  let component: ScreenPacienteParte3AdminComponent;
  let fixture: ComponentFixture<ScreenPacienteParte3AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenPacienteParte3AdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenPacienteParte3AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
