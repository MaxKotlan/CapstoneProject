import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { TextPost } from '../../global/models/TextPost';
import { DataService } from '../../global/services/data.service';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Work } from 'src/app/global/models/Work';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {

  constructor( private dataService : DataService,
    private store: Store<{ isLoggedIn : boolean }>,
    ) { }

  isLoggedIn$ : Observable<boolean> = this.store.pipe(select('isLoggedIn'));
  works$ : Observable<Array<Work>> = this.dataService.getWork();

}
