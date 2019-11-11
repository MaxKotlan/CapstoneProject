import { Component, OnInit, Input } from '@angular/core';
import { Work } from 'src/app/global/models/Work';
import { Category } from 'src/app/global/models/Category';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(
    private store: Store<{ isLoggedIn : boolean }>,
  ) { }

  isLoggedIn$ : Observable<boolean> = this.store.pipe(select('isLoggedIn'));
  previewMode: boolean = true;

  @Input() category: Category;
  @Input() allWorks : Array<Work>;

  worksFiltered : Array<Work>;

  public EmptyCategory : boolean;

  ngOnChange(){ this.isEmptyCategory(); this.filter(); }
  ngOnInit() {  this.ngOnChange(); }

  
  isEmptyCategory(){
    this.EmptyCategory = this.allWorks?
      this.allWorks.some((w : Work)=> w.category = this.category.id) :
      true;
  }

  filter(){
    console.log(         this.allWorks.filter((w : Work) => w.category == this.category.id));
    this.worksFiltered = this.allWorks.filter((w : Work) => w.category == this.category.id);
  }
}
