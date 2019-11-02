import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable, interval } from 'rxjs';

import { TextPost } from 'src/app/models/TextPost';

@Component({
  selector: 'app-text-posts',
  templateUrl: './text-posts.component.html',
  styleUrls: ['./text-posts.component.scss']
})
export class TextPostsComponent {

  constructor(private dataService : DataService) { }

  posts : Observable<Array<TextPost>> = this.dataService.getAll();

}
