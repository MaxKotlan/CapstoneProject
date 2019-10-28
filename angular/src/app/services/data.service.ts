import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TextPost } from '../models/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private controllerUrl : string = "/";

  constructor(private http: HttpClient) { }

  public getAll() : Observable<Array<TextPost>>{
    const options = this.httpOptions();
    var completeUrl : string = this.controllerUrl + "/all";
    return this.http.get<Array<TextPost>>(completeUrl, options);
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
