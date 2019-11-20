import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/global/models/Category';

@Component({
  selector: 'app-category-displaymode',
  templateUrl: './category-displaymode.component.html',
  styleUrls: ['./category-displaymode.component.scss']
})
export class CategoryDisplaymodeComponent implements OnInit {

  constructor() { }

  @Input() category : Category;

  ngOnInit() {
  }

}
