import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Login } from '../models/Login';
import { Invite } from '../models/Invite';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private controllerUrl : string = environment.apiURL;

  constructor(private http: HttpClient) {}

  public isLoggedIn() : Observable<boolean>{
    var completeUrl : string = this.controllerUrl + "isLoggedIn";
    return this.http.get<boolean>(completeUrl); 
  }

  public logout() : Observable<string>{
    var completeUrl : string = this.controllerUrl + "logout";
    return this.http.get<string>(completeUrl, {responseType:'text' as 'json'}); 
  }
  
  public login(userlogin : Login) : Observable<string>{
    var completeUrl : string = this.controllerUrl + "login";
    return this.http.post<string>(completeUrl, userlogin, {responseType:'text' as 'json'});
  }

  public invite(invitee : Invite) : Observable<string>{
    var completeUrl : string = this.controllerUrl + "newAdmin";
    return this.http.post<string>(completeUrl, invitee, {responseType:'text' as 'json'});
  }

  public register(registration : Login) : Observable<string>{
    var completeUrl : string = this.controllerUrl + "register";
    return this.http.post<string>(completeUrl, registration, {responseType:'text' as 'json'});
  }
}
