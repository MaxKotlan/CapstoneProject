import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable, interval, Subscription } from 'rxjs';

import { TextPost } from 'src/app/models/TextPost';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-text-posts',
  templateUrl: './text-posts.component.html',
  styleUrls: ['./text-posts.component.scss']
})
export class TextPostsComponent implements OnInit, OnDestroy {

  constructor(
    private loginService : LoginService,
    private dataService  : DataService) { }

  isLoggedIn : boolean = true;
  posts$ : Observable<Array<TextPost>> = this.dataService.getText();

  /*Subscriptions*/
  private isLoggedInSub : Subscription;

  updateText(text : Text){
    let k = this.dataService.updateText(text);
    k.subscribe(x => console.log(x));
  }

  ngOnInit(){
    //this.isLoggedInSub = this.loginService.isLoggedIn().subscribe(x => this.isLoggedIn = x == "true")
  }

  ngOnDestroy(){ this.isLoggedInSub.unsubscribe(); }
}
