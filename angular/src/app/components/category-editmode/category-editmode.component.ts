import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { Category } from 'src/app/global/models/Category';
import { Store } from '@ngrx/store';
import { categoryChanged, updateCategory, deleteCategory } from 'src/app/global/actions/category.actions';

@Component({
  selector: 'app-category-editmode',
  templateUrl: './category-editmode.component.html',
  styleUrls: ['./category-editmode.component.scss']
})
export class CategoryEditmodeComponent {

  constructor(private store : Store<any>) { }

  @Input() category : Category;

  ngChange(){
    this.store.dispatch(categoryChanged({payload: this.category}));
  }

  deleteCategory(){
    this.store.dispatch(deleteCategory({payload: this.category}));
  }

  updateCategory(){
    this.store.dispatch(updateCategory({payload: this.category}));
  }

}
