import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './global/services/login.service';
import { ToastService } from 'ng-uikit-pro-standard';
import { fadeAnimation } from './animations/fade.animation';
import { Store, select } from '@ngrx/store';
import { isLoggedInSuccesfully, isLoggedOutSuccesfully } from './global/actions/login.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fadeAnimation ]
})
export class AppComponent {

  constructor(
    private loginService : LoginService,
    private store: Store<{ isLoggedIn : boolean }>,
    private toast : ToastService
  ){}

  title = 'Kenneth E. Batcher';

  links = [
    {title: "Information", route: "/", icon: "info-circle"},
    {title: "Works", route: "/works", icon: "file-pdf"}
  ]

  isLoggedIn$ : Observable<boolean> = this.store.pipe(select('isLoggedIn')); 

  public logout() : void{
    this.loginService.logout().toPromise().then(
      (suc) => [
          this.toast.success("You have been logged out!", "Success"),
          this.store.dispatch(isLoggedOutSuccesfully())
      ],
      (err) => this.toast.error("Could not Logout!", "Error")
    );
  }

  public checkIfLoggedIn() : void{ 
    this.loginService.isLoggedIn().toPromise().then(
      suc => this.store.dispatch(suc? isLoggedInSuccesfully() : isLoggedOutSuccesfully()),
      err => this.toast.error("Could not check if logged in or not", "Error")
    );
  }

  ngOnInit() { 
    this.checkIfLoggedIn(); 
  };

}
