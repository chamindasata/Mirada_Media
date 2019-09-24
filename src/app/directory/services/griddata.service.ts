import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GriddataService {

  constructor(private http: HttpClient) { }

  getContacts(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getCompanies(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getEmailList(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
