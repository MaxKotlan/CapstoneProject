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
export class TextPostsComponent implements OnInit, OnDestroy {

  constructor(
    private loginService : LoginService,
    private dataService  : DataService,
    private toast: ToastService
    ) { }

  isLoggedIn : boolean = false;
  posts$ : Observable<Array<TextPost>> = this.dataService.getText();

  /*Subscriptions*/
  private isLoggedInSub : Subscription;

  updateText(text : TextPost){
    this.dataService.updateText(text).subscribe(
      (res : string) => this.toast.success("Succesfully Updated Text", "Success"),
      (err : HttpErrorResponse)=> {console.log(err); this.toast.error(err.statusText, "Error");}
    );   
  }

  ngOnInit(){
    this.isLoggedInSub = this.loginService.isLoggedIn().subscribe(y => this.isLoggedIn = y);
  }

  ngOnDestroy(){ this.isLoggedInSub.unsubscribe(); }
}
