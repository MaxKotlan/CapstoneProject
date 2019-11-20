import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/global/models/Category';
import { Store } from '@ngrx/store';
import { addCategory } from 'src/app/global/actions/category.actions';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.scss']
})
export class AddCategoryModalComponent implements OnInit {

  constructor(private store : Store<any>) { }

  public toAddCategory : Category = new Category();


  public addButtonClicked(){
    this.store.dispatch(addCategory({payload: this.toAddCategory}));
    this.toAddCategory = new Category();
  }

  ngOnInit() {
  }

}
