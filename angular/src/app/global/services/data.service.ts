import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TextPost } from '../models/TextPost';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Work } from '../models/Work';

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

  public addText(text : TextPost) : Observable<string>{
    const options = this.httpOptions2();
    var completeUrl : string = this.controllerUrl + "text";
    return this.http.post<string>(completeUrl, text, options);
  }

  public updateText(text : TextPost) : Observable<string>{
    const options = this.httpOptions2();
    var completeUrl : string = this.controllerUrl + "text";
    return this.http.put<string>(completeUrl, text, options);
  }

  public getWork() : Observable<Array<Work>>{
    const options = this.httpOptions();
    var completeUrl : string = this.controllerUrl + "work";
    return this.http.get<Array<Work>>(completeUrl, options);
  }

  public updateWork(work : Work) : Observable<string>{
    const options = this.httpOptions2();
    var completeUrl : string = this.controllerUrl + "work";
    return this.http.put<string>(completeUrl, work, options);
  }

  public deleteWork(work : Work) : Observable<string>{
    const options = this.httpOptions();
    var completeUrl : string = this.controllerUrl + "work/" + work.id;
    return this.http.delete<string>(completeUrl, options);
  }


  private httpOptions2() {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
        responseType:'text' as 'json'
    };
  }

  private httpOptions() {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };
  }
}
