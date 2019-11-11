import { Component, OnInit, Input } from '@angular/core';
import { Work } from 'src/app/global/models/Work';
import { Category } from 'src/app/global/models/Category';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(
    private store: Store<{ isLoggedIn : boolean, works: Array<Work> }>,
  ) { }

  isLoggedIn$ : Observable<boolean> = this.store.pipe(select('isLoggedIn'));
  works$ : Observable<Array<Work>> = this.store.pipe(select('works'));
  worksCategory$ : Observable<Array<Work>>;
  isEmptyCategory$ : Observable<boolean>;

  previewMode: boolean = true;
  @Input() category: Category;

  worksFiltered : Array<Work>;

  public EmptyCategory : boolean;

  ngOnInit() { 
    this.worksCategory$ = this.works$.pipe(map(w => w.filter(x=> x.category == this.category.id)))
    this.isEmptyCategory$ = this.worksCategory$.pipe(map(x => x.length > 0));
    this.isEmptyCategory$.subscribe(x => console.log(this.category.id, x))
  }
  
  // this.ngOnChange(); } }

  //filter(w : Work){
  //  return w.category == this.category.id;
  //}
}
