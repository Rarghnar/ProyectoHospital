import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenRegistrarEnferComponent } from './screen-registrar-enfer.component';

describe('ScreenRegistrarEnferComponent', () => {
  let component: ScreenRegistrarEnferComponent;
  let fixture: ComponentFixture<ScreenRegistrarEnferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenRegistrarEnferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenRegistrarEnferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
