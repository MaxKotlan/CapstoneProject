import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable, interval, Subscription } from 'rxjs';

import { TextPost } from 'src/app/models/TextPost';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/models/Login';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from 'ng-uikit-pro-standard';
import { mapTo, map } from 'rxjs/operators';

@Component({
  selector: 'app-text-posts',
  templateUrl: './text-posts.component.html',
  styleUrls: ['./text-posts.component.scss']
})
export class TextPostsComponent {

  constructor(
    private dataService  : DataService,
    private loginService : LoginService,
    private toast: ToastService
    ) { }

  isLoggedIn$ : Observable<boolean> = this.loginService.isLoggedIn();
  posts$ : Observable<Array<TextPost>> = this.dataService.getText();

  updateText(text : TextPost){
    this.dataService.updateText(text).toPromise().then(
      (res : string) => this.toast.success("Succesfully Updated Text", "Success"),
      (err : HttpErrorResponse)=> this.toast.error(err.statusText, "Error")
    );   
  }
}
