import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenContactosAdminComponent } from './screen-contactos-admin.component';

describe('ScreenContactosAdminComponent', () => {
  let component: ScreenContactosAdminComponent;
  let fixture: ComponentFixture<ScreenContactosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenContactosAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenContactosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
