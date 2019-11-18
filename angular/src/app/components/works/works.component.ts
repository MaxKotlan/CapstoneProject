import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { TextPost } from '../../global/models/TextPost';
import { DataService } from '../../global/services/data.service';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Work } from 'src/app/global/models/Work';
import { ToastService } from 'ng-uikit-pro-standard';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from 'src/app/global/models/Category';
import { getWorks, filterWorks } from 'src/app/global/actions/works.actions';
import { togglePreviewMode } from 'src/app/global/actions/preview.actions';
import { getCategories } from 'src/app/global/actions/category.actions';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {

  constructor( private dataService : DataService,
    private store: Store<any>,
    private toast: ToastService
    ) { }

  isLoggedIn$ : Observable<boolean> = this.store.pipe(select('isLoggedIn'));
  isPreviewMode$ : Observable<boolean> = this.store.pipe(select('previewMode'));
  works$ : Observable<Array<Work>> = this.dataService.getWork();
  categories$ : Observable<Array<Category>> = this.store.pipe(select('category')).pipe(select('categories'));
  
  worksAll : Array<Work>;
  worksFiltered : Array<Work>;

  public searchText : string;

  public search() {
    this.store.dispatch(filterWorks({payload: this.searchText}));
  }

  public togglePreviewMode(){
    this.store.dispatch(togglePreviewMode());
  }
}
