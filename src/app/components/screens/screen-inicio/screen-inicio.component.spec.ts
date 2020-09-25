import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenInicioComponent } from './screen-inicio.component';

describe('ScreenInicioComponent', () => {
  let component: ScreenInicioComponent;
  let fixture: ComponentFixture<ScreenInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
