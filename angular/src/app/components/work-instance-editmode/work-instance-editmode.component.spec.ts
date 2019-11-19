import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInstanceEditmodeComponent } from './work-instance-editmode.component';

describe('WorkInstanceEditmodeComponent', () => {
  let component: WorkInstanceEditmodeComponent;
  let fixture: ComponentFixture<WorkInstanceEditmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkInstanceEditmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkInstanceEditmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
