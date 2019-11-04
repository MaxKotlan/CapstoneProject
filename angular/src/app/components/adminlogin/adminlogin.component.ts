import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/models/Login';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent {

  constructor(private loginService : LoginService) { }

  public user : Login = new Login();

  LogIn(){
    this.loginService.login(this.user).subscribe(x => console.log(x));
  }

}
