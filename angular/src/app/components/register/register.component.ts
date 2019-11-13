import { Component } from '@angular/core';
import { LoginService } from '../../global/services/login.service';
import { ToastService } from 'ng-uikit-pro-standard';
import { HttpErrorResponse } from '@angular/common/http';
import { Login } from 'src/app/global/models/Login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private loginService : LoginService,
    private toast : ToastService
  ) { }

  public user : Login = new Login();

  Register(){
    this.loginService.register(this.user).toPromise().then(
      (res : string) => [
        this.toast.success(`Succesfully registered to be an admin. Please verify your email before you can make changes to the site.`, "Success")
      ],
      (err : HttpErrorResponse)=> this.toast.error("Could not register.", "Error")
    );   
  }

}
