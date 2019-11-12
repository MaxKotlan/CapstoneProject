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
import { setWorks } from 'src/app/global/actions/works.actions';
import { togglePreviewMode } from 'src/app/global/actions/preview.actions';

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
  works$ : Observable<Array<Work>> = this.dataService.getWork();
  category$ : Observable<Array<Category>> = this.dataService.getCategory();
  
  worksAll : Array<Work>;
  worksFiltered : Array<Work>;
  categories : Array<Category>;

  public searchText : String;

  public search() {
    let fields : Array<string> = Object.keys(new Work()).filter((key => key != 'id' && key != 'category'));
    this.worksFiltered = this.worksAll.filter((work : Work) => 
      fields.some((key : string) => 
        work[key].toUpperCase().includes(this.searchText.toUpperCase())
      )
    );
    this.store.dispatch(setWorks({payload: this.worksFiltered}));
  }

  public togglePreviewMode(){
    this.store.dispatch(togglePreviewMode());
  }


  ngOnInit(){
    this.category$.toPromise().then(
      (res : Array<Category>) => this.categories = res,
      (err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error")
    );

    this.works$.toPromise().then(
      (res : Array<Work>) => {
        this.worksFiltered = this.worksAll = res;
        this.store.dispatch(setWorks({payload: res}));
      },
      (err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error")
    );
  }

  addWork(work : Work){
    this.dataService.addWork(work).toPromise().then(
      (res : Work) => [
        this.toast.success("Succesfully Added Work", "Success"),
        this.worksAll.push(res)
      ],
      (err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error")
    );      
  }

  updateWork(work : Work){
    this.dataService.updateWork(work).toPromise().then(
      (res : string) => this.toast.success("Succesfully Updated Work", "Success"),
      (err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error")
    );   
  }

  deleteWork(work : Work){
    this.dataService.deleteWork(work).toPromise().then(
      (deletedWork : Work) => [
        this.toast.success("Succesfully Deleted Work", "Success"),
        this.worksAll = this.worksAll.filter((w : Work) => w.id != deletedWork.id)
      ],
      (err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error")
    );   
  }
}
