import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDisplaymodeComponent } from './category-displaymode.component';

describe('CategoryDisplaymodeComponent', () => {
  let component: CategoryDisplaymodeComponent;
  let fixture: ComponentFixture<CategoryDisplaymodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryDisplaymodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDisplaymodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
