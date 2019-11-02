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
    const options = this.httpOptions();
    var completeUrl : string = this.controllerUrl + "isLoggedIn";
    return this.http.get<string>(completeUrl, options).pipe(map(x => (x == "true"))); 
  }
  
  public login(userlogin : Login) : Observable<string>{
    const options = this.httpOptions();
    var completeUrl : string = this.controllerUrl + "login";
    return this.http.post<string>(completeUrl, userlogin, options);
  }

  private httpOptions() {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            //'Authorization': 'my-auth-token'
        })
    };
  }
}
