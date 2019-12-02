import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleMaintenanceModeComponent } from './toggle-maintenance-mode.component';

describe('ToggleMaintenanceModeComponent', () => {
  let component: ToggleMaintenanceModeComponent;
  let fixture: ComponentFixture<ToggleMaintenanceModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleMaintenanceModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleMaintenanceModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
