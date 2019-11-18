import { Component } from '@angular/core';
import { LoginService } from '../../global/services/login.service';
import { Login } from '../../global/models/Login';
import { ToastService } from 'ng-uikit-pro-standard';
import { HttpErrorResponse } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSuccesfully } from 'src/app/global/actions/login.actions';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private loginService : LoginService,
    private store: Store<{ isLoggedIn : boolean }>,
    private toast : ToastService
  ) { }

  isLoggedIn$ : Observable<boolean> = this.store.pipe(select('isLoggedIn'));
  public user : Login = new Login();

  LogIn(){
    this.loginService.login(this.user).toPromise().then(
      (res : string) => [
        this.store.dispatch(isLoggedInSuccesfully()),
        this.toast.success("Succesfully Logged in as " + this.user.email, "Success")
      ],
      (err : HttpErrorResponse)=> this.toast.error("Could not log in.", "Error")
    );   
  }

}
