import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInstanceDisplaymodeComponent } from './work-instance-displaymode.component';

describe('WorkInstanceDisplaymodeComponent', () => {
  let component: WorkInstanceDisplaymodeComponent;
  let fixture: ComponentFixture<WorkInstanceDisplaymodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkInstanceDisplaymodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkInstanceDisplaymodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
