import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delete-warning',
  templateUrl: './delete-warning.component.html',
  styleUrls: ['./delete-warning.component.scss']
})
export class DeleteWarningComponent {

  @Input() objectToDelete : any;
  @Input() deleteCallback : Function;

  constructor() { }

  

}
