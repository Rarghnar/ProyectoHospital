import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEnferComponent } from './registro-enfer.component';

describe('RegistroEnferComponent', () => {
  let component: RegistroEnferComponent;
  let fixture: ComponentFixture<RegistroEnferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEnferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEnferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
