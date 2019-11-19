import { Component, OnInit, Input } from '@angular/core';
import { Work } from 'src/app/global/models/Work';
import { Store, select } from '@ngrx/store';
import { deleteWorks, updateWorks } from 'src/app/global/actions/works.actions';
import { Observable } from 'rxjs';
import { Category } from 'src/app/global/models/Category';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-work-instance-editmode',
  templateUrl: './work-instance-editmode.component.html',
  styleUrls: ['./work-instance-editmode.component.scss']
})
export class WorkInstanceEditmodeComponent {

  constructor(private store: Store<any>) { }

  categories$ : Observable<Array<Category>> = this.store.pipe(select('category')).pipe(select('categories'));
  categorySelector$ : Observable<Array<any>> = this.categories$.pipe(map((categories : Array<Category>) => 
    categories.map((category : Category) => {return { value: category.id, label: category.title };})
  ));

  @Input() work : Work;

  updateWork(w: Work){
    this.store.dispatch(updateWorks({payload: w}));
  }

  deleteWork(w : Work){
    this.store.dispatch(deleteWorks({payload: w}));
  }
}
