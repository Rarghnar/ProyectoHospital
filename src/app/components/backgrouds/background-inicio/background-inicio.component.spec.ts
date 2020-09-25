import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundInicioComponent } from './background-inicio.component';

describe('BackgroundInicioComponent', () => {
  let component: BackgroundInicioComponent;
  let fixture: ComponentFixture<BackgroundInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
