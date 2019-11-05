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

  isLoggedIn : boolean = true;
  posts$ : Observable<Array<TextPost>> = this.dataService.getText();

  /*Subscriptions*/
  private isLoggedInSub : Subscription;

  updateText(text : Text){
    this.dataService.updateText(text).subscribe(
      (res : TextPost) => this.updateTextPostsLocally(res),
      (err : HttpErrorResponse)=> {console.log(err); this.toast.error(err.statusText, "Error");}
    );   
  }

  updateTextPostsLocally(text : TextPost){
    this.posts$ = this.posts$.pipe(map(
      (posts : Array<TextPost>) => {
        Object.assign(posts.find((p : TextPost) => p.id == text.id), text); 
        return posts; 
      }));
  }

  ngOnInit(){
    this.loginService.login( new Login("Admin", "secret") ).toPromise().then(
      x => this.loginService.isLoggedIn().subscribe(y => console.log(x, y)),
      e => this.loginService.isLoggedIn().subscribe(z => console.log(e, z))
    );
  }

  ngOnDestroy(){ this.isLoggedInSub.unsubscribe(); }
}
