import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TextPost } from '../models/TextPost';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Login } from '../models/Login';
import { map } from 'rxjs/operators';

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
}
