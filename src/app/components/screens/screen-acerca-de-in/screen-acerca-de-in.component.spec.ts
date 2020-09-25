import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAcercaDeInComponent } from './screen-acerca-de-in.component';

describe('ScreenAcercaDeInComponent', () => {
  let component: ScreenAcercaDeInComponent;
  let fixture: ComponentFixture<ScreenAcercaDeInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenAcercaDeInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenAcercaDeInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
