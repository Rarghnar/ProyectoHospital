import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenContactosComponent } from './screen-contactos.component';

describe('ScreenContactosComponent', () => {
  let component: ScreenContactosComponent;
  let fixture: ComponentFixture<ScreenContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenContactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
