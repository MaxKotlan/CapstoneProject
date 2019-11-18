import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(
    private store: Store<{ isLoggedIn : boolean }>
  ) { }

  isLoggedIn$ : Observable<boolean> = this.store.pipe(select('isLoggedIn')); 
}
