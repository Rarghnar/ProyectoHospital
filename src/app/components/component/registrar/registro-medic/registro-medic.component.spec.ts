import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMedicComponent } from './registro-medic.component';

describe('RegistroMedicComponent', () => {
  let component: RegistroMedicComponent;
  let fixture: ComponentFixture<RegistroMedicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroMedicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMedicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
