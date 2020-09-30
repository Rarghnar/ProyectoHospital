import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenHomeAdminComponent } from './screen-home-admin.component';

describe('ScreenHomeAdminComponent', () => {
  let component: ScreenHomeAdminComponent;
  let fixture: ComponentFixture<ScreenHomeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenHomeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenHomeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
