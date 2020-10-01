import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenRegistrarMedComponent } from './screen-registrar-med.component';

describe('ScreenRegistrarMedComponent', () => {
  let component: ScreenRegistrarMedComponent;
  let fixture: ComponentFixture<ScreenRegistrarMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenRegistrarMedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenRegistrarMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
