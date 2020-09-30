import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAcercaDeAdminComponent } from './screen-acerca-de-admin.component';

describe('ScreenAcercaDeAdminComponent', () => {
  let component: ScreenAcercaDeAdminComponent;
  let fixture: ComponentFixture<ScreenAcercaDeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenAcercaDeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenAcercaDeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
