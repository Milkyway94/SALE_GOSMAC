import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  url:string="/api/product";
  constructor(private _http: Http) { }
  getAllPosts(){
    return this._http.get("/api/product")
    .map(res=>res.json());
  }

  DeletePost (id:string) {
        return this._http.delete(`${this.url}/${id}`) // ...using put request
                         .map(res => res.json()) // ...and calling .json() on the response to return data
    }  
}
