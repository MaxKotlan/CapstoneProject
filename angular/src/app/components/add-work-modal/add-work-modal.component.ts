import { Component, Input } from '@angular/core';
import { Work } from 'src/app/global/models/Work';
import { Store, select } from '@ngrx/store';
import { addWorks } from 'src/app/global/actions/works.actions';
import { Observable, Subscription } from 'rxjs';
import { Category } from 'src/app/global/models/Category';

@Component({
  selector: 'app-add-work-modal',
  templateUrl: './add-work-modal.component.html',
  styleUrls: ['./add-work-modal.component.scss']
})
export class AddWorkModalComponent {

  constructor(
    private store: Store<any>,
  ) { }

  public toAddWork : Work = new Work();
  public selectedCategoryID : Number;
  public categoryOptions : Array<any>;

  public categories$ : Observable<Array<Category>> = this.store.pipe(select('category')).pipe(select('categories'));
  private catSubscription : Subscription;

  public addButtonClicked(){
    this.toAddWork.category = this.selectedCategoryID;
    this.store.dispatch(addWorks({payload: this.toAddWork}));
    this.toAddWork = new Work();
  }

  ngOnInit(){
    this.catSubscription = this.categories$.subscribe((categories : Array<Category>) =>
        this.categoryOptions = categories.map((category : Category) => { return {value: category.id, label: category.title};})
    );
  }

  ngOnDestroy(){ this.catSubscription.unsubscribe();}
}
