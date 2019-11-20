import { Component, OnInit, Input } from '@angular/core';
import { Work } from 'src/app/global/models/Work';

@Component({
  selector: 'app-work-instance-displaymode',
  templateUrl: './work-instance-displaymode.component.html',
  styleUrls: ['./work-instance-displaymode.component.scss']
})
export class WorkInstanceDisplaymodeComponent {

  constructor() { }

  @Input() work : Work;

}
