import { Component, OnInit } from '@angular/core';
import { DataService } from '../../global/services/data.service';
import { Observable } from 'rxjs';

import { TextPost } from '../../global/models/TextPost';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from 'ng-uikit-pro-standard';
import { Store, select } from '@ngrx/store';
import { togglePreviewMode } from 'src/app/global/actions/preview.actions';
import { getText, addTextSuccesfully, addText, deleteText, updateText } from 'src/app/global/actions/text.actions';
import { updateWorks } from 'src/app/global/actions/works.actions';

@Component({
  selector: 'app-text-posts',
  templateUrl: './text-posts.component.html',
  styleUrls: ['./text-posts.component.scss']
})
export class TextPostsComponent{

  constructor(
    private dataService  : DataService,
    private store: Store<any>,
    private toast: ToastService,
    ) { }

  isLoggedIn$ : Observable<boolean> = this.store.pipe(select('isLoggedIn'));
  isPreviewMode$ : Observable<boolean> = this.store.pipe(select('previewMode'));
  posts$ : Observable<Array<TextPost>> = this.store.pipe(select('textposts')).pipe(select('allText'));
  
  public togglePreviewMode(){
    this.store.dispatch(togglePreviewMode());
  }

  addText(text : TextPost){
    this.store.dispatch(addText({payload: text}));
  }

  updateText(text : TextPost){
    this.store.dispatch(updateText({payload: text}));
  }

  deleteText(text : TextPost){
    this.store.dispatch(deleteText({payload: text}));
  } 
}
