import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/models/Login';
import { ToastService } from 'ng-uikit-pro-standard';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent {

  constructor(
    private loginService : LoginService,
    private toast : ToastService
  ) { }

  public user : Login = new Login();

  LogIn(){
    this.loginService.login(this.user).toPromise().then(
      (res : string) => this.toast.success("Succesfully Logged in as " + this.user.username, "Success"),
      (err : HttpErrorResponse)=> this.toast.error("Could not log in.", "Error")
    );   
  }

}
