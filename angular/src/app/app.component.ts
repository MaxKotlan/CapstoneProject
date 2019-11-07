import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';
import { ToastService } from 'ng-uikit-pro-standard';
import { fadeAnimation } from './animations/fade.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fadeAnimation ]
})
export class AppComponent {

  constructor(
    private loginService : LoginService,
    private toast : ToastService
  ){}

  title = 'Dr. Kent Batcher';

  links = [
    {title: "Home", route: "/"},
    {title: "Works", route: "/works"}
  ]

  isLoggedIn$ : Observable<boolean> = this.loginService.isLoggedIn(); 

  logout(){
    this.loginService.logout().toPromise().then(
      (suc) => this.toast.success("You have been logged out!", "Success"),
      (err) => this.toast.error("Could not Logout!", "Error")
    );
  }

}
