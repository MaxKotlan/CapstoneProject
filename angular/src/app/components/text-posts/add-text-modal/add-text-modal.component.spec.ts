import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTextModalComponent } from './add-text-modal.component';

describe('AddTextModalComponent', () => {
  let component: AddTextModalComponent;
  let fixture: ComponentFixture<AddTextModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTextModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTextModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
