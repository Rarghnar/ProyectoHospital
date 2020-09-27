import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleInComponent } from './collapsible-in.component';

describe('CollapsibleInComponent', () => {
  let component: CollapsibleInComponent;
  let fixture: ComponentFixture<CollapsibleInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapsibleInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
