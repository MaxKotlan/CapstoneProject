import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

import { TextPost } from 'src/app/models/model';

@Component({
  selector: 'app-text-posts',
  templateUrl: './text-posts.component.html',
  styleUrls: ['./text-posts.component.scss']
})
export class TextPostsComponent implements OnInit {

  constructor(private dataService : DataService) { }

  posts : Observable<Array<TextPost>>;
  
  k : Observable<Array<TextPost>>;

  ngOnInit() {
    this.posts = this.dataService.getAll();
    this.k =  interval(1000).pipe(map(x => new Array<TextPost>( new TextPost(x, "test", "test", "test"))));
    this.k.subscribe(x => console.log(x));
  }

  ngOnDestroy(){
    
  }

}
