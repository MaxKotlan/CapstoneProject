import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceActivatedComponent } from './maintenance-activated.component';

describe('MaintenanceActivatedComponent', () => {
  let component: MaintenanceActivatedComponent;
  let fixture: ComponentFixture<MaintenanceActivatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceActivatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceActivatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
