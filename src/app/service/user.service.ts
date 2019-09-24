import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(public httpClient:HttpClient) { }

  userLogin(user):Observable<any>{
    
    let loginUrl =environment.apiUrl+"login";
    return this.httpClient.post(loginUrl,user);


  }
}
