import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/global/models/Category';
import { Store } from '@ngrx/store';
import { categoryUpdated } from 'src/app/global/actions/category.actions';

@Component({
  selector: 'app-category-editmode',
  templateUrl: './category-editmode.component.html',
  styleUrls: ['./category-editmode.component.scss']
})
export class CategoryEditmodeComponent implements OnInit {

  constructor(private store : Store<any>) { }

  @Input() category : Category;

  ngChange(){
    this.store.dispatch(categoryUpdated({payload: this.category}));
  }

  ngOnInit() {
  }

}
