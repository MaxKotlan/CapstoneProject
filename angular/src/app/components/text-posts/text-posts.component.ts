import { Component } from '@angular/core';
import { DataService } from '../../global/services/data.service';
import { Observable } from 'rxjs';

import { TextPost } from '../../global/models/TextPost';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from 'ng-uikit-pro-standard';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-text-posts',
  templateUrl: './text-posts.component.html',
  styleUrls: ['./text-posts.component.scss']
})
export class TextPostsComponent{

  constructor(
    private dataService  : DataService,
    private store: Store<{ isLoggedIn : boolean }>,
    private toast: ToastService
    ) { }

  isLoggedIn$ : Observable<boolean> = this.store.pipe(select('isLoggedIn'));
  posts$ : Observable<Array<TextPost>> = this.dataService.getText();

  updateText(text : TextPost){
    this.dataService.updateText(text).toPromise().then(
      (res : string) => this.toast.success("Succesfully Updated Text", "Success"),
      (err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error")
    );   
  }
}
