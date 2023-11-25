import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySubdetailsComponent } from './category-subdetails.component';

describe('CategorySubdetailsComponent', () => {
  let component: CategorySubdetailsComponent;
  let fixture: ComponentFixture<CategorySubdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorySubdetailsComponent]
    });
    fixture = TestBed.createComponent(CategorySubdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
