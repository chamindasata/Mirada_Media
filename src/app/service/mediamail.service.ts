import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { mediaMailList } from '../entity/mediamail';

@Injectable({
  providedIn: 'root'
})
export class MediamailService {

  public apiUrl=environment.apiUrl+'mediamail';
  constructor(public http:HttpClient) { }

  getAllMediaList():Observable<mediaMailList[]>{
   
    return this.http.get<mediaMailList[]>(this.apiUrl);

  }

  
}
