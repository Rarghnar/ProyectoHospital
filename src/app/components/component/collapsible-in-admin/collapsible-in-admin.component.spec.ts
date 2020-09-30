import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleInAdminComponent } from './collapsible-in-admin.component';

describe('CollapsibleInAdminComponent', () => {
  let component: CollapsibleInAdminComponent;
  let fixture: ComponentFixture<CollapsibleInAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapsibleInAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleInAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
