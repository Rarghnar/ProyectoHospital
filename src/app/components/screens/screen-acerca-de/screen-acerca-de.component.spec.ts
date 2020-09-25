import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAcercaDeComponent } from './screen-acerca-de.component';

describe('ScreenAcercaDeComponent', () => {
  let component: ScreenAcercaDeComponent;
  let fixture: ComponentFixture<ScreenAcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenAcercaDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
