import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Product } from './../model/product';

@Injectable()
export class ProductService {
  url: string = "/api/product";
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private _http: Http) { }
  getAllPosts() {
    return this._http.get("/api/product")
      .map(res => res.json());
  }
  Add(product:Product, token:string){
    return this._http.post("/api/product", JSON.stringify({product,token}))
      .map(res => res.json());
  }
  // DeletePost (id:string) {
  //       return this._http.delete(`${this.url}/${id}`) // ...using put request
  //                        .map(res => res.json()) // ...and calling .json() on the response to return data
  //   }  
  UpdatePost(id: string) {
    const purl = `${this.url}/${id}`;
    return this._http.get(purl);
  }
  Search(keyword: string): Observable<any[]> {
    return this._http.get(this.url + "?search=" + keyword)
      .map((res: Response) => res.json());
  }
  Delete(id: number): Observable<any> {
    return this._http.delete(this.url + id)
      .map((res: Response) => res.json())
  }
}
