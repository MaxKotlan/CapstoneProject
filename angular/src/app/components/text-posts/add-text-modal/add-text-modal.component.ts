import { Component, OnInit, Input } from '@angular/core';
import { TextPost } from 'src/app/global/models/TextPost';

@Component({
  selector: 'app-add-text-modal',
  templateUrl: './add-text-modal.component.html',
  styleUrls: ['./add-text-modal.component.scss']
})
export class AddTextModalComponent {

  constructor() { }

  public toAddText : TextPost = new TextPost();
  @Input() public addButtonCallback : Function;

  public addButtonClicked(){
    this.addButtonCallback(this.toAddText);
    this.toAddText = new TextPost();
  }
}
