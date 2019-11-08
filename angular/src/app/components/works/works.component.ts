import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { TextPost } from '../../global/models/TextPost';
import { DataService } from '../../global/services/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  constructor( private dataService : DataService ) { }

  works : Observable<Array<TextPost>>;// = this.dataService.getAll();

  ngOnInit() {
    let j = [];
    this.works =  interval(1000).pipe(map(x => {j.push(new TextPost(x, "work " + x, "test", "test", "test")); return j;}));

  }

}
