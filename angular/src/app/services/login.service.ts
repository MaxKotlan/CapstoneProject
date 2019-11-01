import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TextPost } from '../models/TextPost';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private controllerUrl : string = "/";

  constructor(private http: HttpClient) {}

  public getAll(){
    const options = this.httpOptions();
    var completeUrl : string = this.controllerUrl + "/all";
    return this.http.get<TextPost>(completeUrl, options);
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
