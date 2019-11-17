import { Component, OnInit } from '@angular/core';
import { DataService } from '../../global/services/data.service';
import { Observable } from 'rxjs';

import { TextPost } from '../../global/models/TextPost';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from 'ng-uikit-pro-standard';
import { Store, select } from '@ngrx/store';
import { togglePreviewMode } from 'src/app/global/actions/preview.actions';

@Component({
  selector: 'app-text-posts',
  templateUrl: './text-posts.component.html',
  styleUrls: ['./text-posts.component.scss']
})
export class TextPostsComponent implements OnInit{

  constructor(
    private dataService  : DataService,
    private store: Store<any>,
    private toast: ToastService,
    ) { }

  isLoggedIn$ : Observable<boolean> = this.store.pipe(select('isLoggedIn'));
  isPreviewMode$ : Observable<boolean> = this.store.pipe(select('previewMode'));
  posts$ : Observable<Array<TextPost>> = this.dataService.getText();
  posts : Array<TextPost>;

  public togglePreviewMode(){
    this.store.dispatch(togglePreviewMode());
  }

  ngOnInit(){
    this.posts$.toPromise().then(
      (res : Array<TextPost>) => this.posts = res,
      (err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error")
    );
  }

  addText(text : TextPost){
    this.dataService.addText(text).toPromise().then(
      (res : TextPost) => [
        this.toast.success("Succesfully Added Text", "Success"),
        this.posts.push(res)
      ],
      (err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error")
    );      
  }

  updateText(text : TextPost){
    this.dataService.updateText(text).toPromise().then(
      (res : string) => this.toast.success("Succesfully Updated Text", "Success"),
      (err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error")
    );   
  }

  deleteText(text : TextPost){
    this.dataService.deleteText(text).toPromise().then(
      (deletedPost : TextPost) => [
        this.toast.success("Succesfully Deleted Text", "Success"),
        this.posts = this.posts.filter((t : TextPost) => t.id != deletedPost.id)
      ],
      (err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error")
    );   
  }
}
