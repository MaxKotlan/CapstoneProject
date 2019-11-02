import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dr. Kent Batcher';

  links = [
    {title: "Home", route: "/"},
    {title: "Works", route: "/works"}
  ]
}
