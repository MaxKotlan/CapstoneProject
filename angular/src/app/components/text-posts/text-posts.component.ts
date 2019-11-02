import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable, interval } from 'rxjs';

import { TextPost } from 'src/app/models/TextPost';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-text-posts',
  templateUrl: './text-posts.component.html',
  styleUrls: ['./text-posts.component.scss']
})
export class TextPostsComponent {

  constructor(
    private loginService : LoginService,
    private dataService  : DataService) { }

  isLoggedIn : Observable<boolean> = this.loginService.isLoggedIn();
  posts : Observable<Array<TextPost>> = this.dataService.getAll();

}
