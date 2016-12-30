import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  url:string="/api/product";
  constructor(private _http: Http) { }
  //get all product
  getAllPosts(){
    return this._http.get("/api/product")
    .map(res=>res.json());
  }
  //add product
  addProduct(product){
    return this._http.post("/api/product/add", product)
    .map(res=>res.json());
  }
  //delete product
  DeletePost (id:string) {
        return this._http.delete(`${this.url}/${id}`) // ...using put request
                         .map(res => res.json()) // ...and calling .json() on the response to return data
    }  
}
