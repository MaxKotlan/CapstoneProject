import { Component, Input } from '@angular/core';
import { Work } from 'src/app/global/models/Work';
import { Store } from '@ngrx/store';
import { addWorks } from 'src/app/global/actions/works.actions';

@Component({
  selector: 'app-add-work-modal',
  templateUrl: './add-work-modal.component.html',
  styleUrls: ['./add-work-modal.component.scss']
})
export class AddWorkModalComponent {

  constructor(
    private store: Store<any>,
  ) { }

  public toAddWork : Work = new Work();

  public addButtonClicked(){
    this.store.dispatch(addWorks({payload: this.toAddWork}));
    this.toAddWork = new Work();
  }
}
