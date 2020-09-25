import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenContactosInComponent } from './screen-contactos-in.component';

describe('ScreenContactosInComponent', () => {
  let component: ScreenContactosInComponent;
  let fixture: ComponentFixture<ScreenContactosInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenContactosInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenContactosInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
