import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { TextPost } from '../../global/models/TextPost';
import { DataService } from '../../global/services/data.service';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Work } from 'src/app/global/models/Work';
import { ToastService } from 'ng-uikit-pro-standard';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {

  constructor( private dataService : DataService,
    private store: Store<{ isLoggedIn : boolean }>,
    private toast: ToastService
    ) { }

  public previewMode = false;

  isLoggedIn$ : Observable<boolean> = this.store.pipe(select('isLoggedIn'));
  works$ : Observable<Array<Work>> = this.dataService.getWork();

  updateWork(work : Work){
    this.dataService.updateWork(work).toPromise().then(
      (res : string) => this.toast.success("Succesfully Updated Text", "Success"),
      (err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error")
    );   
  }

}
