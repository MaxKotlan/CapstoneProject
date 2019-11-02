import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/models/Login';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  ngOnInit() {
    this.loginService.login( new Login("Admin", "secret") ).subscribe(x => console.log(x));
  }

}
