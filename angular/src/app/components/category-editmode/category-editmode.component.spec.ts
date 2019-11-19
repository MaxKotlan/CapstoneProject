import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEditmodeComponent } from './category-editmode.component';

describe('CategoryEditmodeComponent', () => {
  let component: CategoryEditmodeComponent;
  let fixture: ComponentFixture<CategoryEditmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryEditmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
