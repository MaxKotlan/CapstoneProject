import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { TextPost } from 'src/app/models/TextPost';
import { DataService } from 'src/app/services/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  constructor( private dataService : DataService ) { }

  posts : Observable<Array<TextPost>>;// = this.dataService.getAll();

  ngOnInit() {
    let j = [];
    this.posts =  interval(1000).pipe(map(x => {j.push(new TextPost(x, "work " + x, "test", "test", "test")); return j;}));

  }

}
