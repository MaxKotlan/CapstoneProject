import { Component, OnInit, Input } from '@angular/core';
import { Work } from 'src/app/global/models/Work';
import { Category } from 'src/app/global/models/Category';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { deleteWorks, updateWorks } from 'src/app/global/actions/works.actions';
import { categoryUpdated } from 'src/app/global/actions/category.actions';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(
    private store: Store<any>,
  ) { }

  isLoggedIn$ : Observable<boolean> = this.store.pipe(select('isLoggedIn'));
  isPreviewMode$ : Observable<boolean> = this.store.pipe(select('previewMode'));
  works$ : Observable<Array<Work>> = this.store.pipe(select('works')).pipe(select('filteredWorks'));
  worksCategory$ : Observable<Array<Work>>;
  isEmptyCategory$ : Observable<boolean>;

  @Input() category: Category;

  ngChange(){
    this.store.dispatch(categoryUpdated({payload: this.category}));
  }

  ngOnInit() { 
    let filterby = this.category? this.category.id : null;
    this.worksCategory$ = this.works$.pipe(map(w => w.filter(x => x.category == filterby)))
    this.isEmptyCategory$ = this.worksCategory$.pipe(map(x => x.length > 0));
  }
}
