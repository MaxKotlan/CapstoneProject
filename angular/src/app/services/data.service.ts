import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TextPost } from '../models/TextPost';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private controllerUrl : string = environment.apiURL;

  constructor(private http: HttpClient) { }

  public getText() : Observable<Array<TextPost>>{
    const options = this.httpOptions();
    var completeUrl : string = this.controllerUrl + "text";
    return this.http.get<Array<TextPost>>(completeUrl, options);
  }

  public updateText(text : Text) : Observable<TextPost>{
    const options = this.httpOptions();
    var completeUrl : string = this.controllerUrl + "text";
    return this.http.post<TextPost>(completeUrl, text, options);
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
