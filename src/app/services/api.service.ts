import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url: string;
  
  constructor(private _http:HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/';
  }

  getPosts() {
    return this._http.get(this.url + "posts");
  }
  
}
