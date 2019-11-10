import { Component, Input } from '@angular/core';
import { Work } from 'src/app/global/models/Work';

@Component({
  selector: 'app-add-work-modal',
  templateUrl: './add-work-modal.component.html',
  styleUrls: ['./add-work-modal.component.scss']
})
export class AddWorkModalComponent {

  constructor() { }

  public toAddWork : Work = new Work();
  @Input() public addButtonCallback : Function;

  public addButtonClicked(){
    this.addButtonCallback(this.toAddWork);
    this.toAddWork = new Work();
  }
}
