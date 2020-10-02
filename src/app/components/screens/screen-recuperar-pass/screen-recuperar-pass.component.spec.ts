import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenRecuperarPassComponent } from './screen-recuperar-pass.component';

describe('ScreenRecuperarPassComponent', () => {
  let component: ScreenRecuperarPassComponent;
  let fixture: ComponentFixture<ScreenRecuperarPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenRecuperarPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenRecuperarPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
