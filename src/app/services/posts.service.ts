import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import { map, catchError } from 'rxjs/';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url  = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

getAllPosts() {
  return this.http.get(this.url);
}

}

