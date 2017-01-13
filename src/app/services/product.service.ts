import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
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

  GetSingle(id: string): Observable<any> {
    const url = `${this.url}/${id}`;
    return this._http.get(url)
      .map((response: Response) => response.json())
  }

  Add(product: Product) {
    //console.log(product);
    return this._http.post(this.url, product)
      .map(res => res.json());
  }
  Update(id: string, data: any): Observable<any> {
    const url = `${this.url}/${id}`;
    return this._http.put(url, data)
      .map((res: Response) => res.json())
  }
  //  Update(product: Product): Promise<Product> {
  //     const Purl = `${this.url}/${product.id}`;
  //     return this._http
  //       .put(Purl, JSON.stringify(product), {headers: this.headers})
  //       .toPromise()
  //       .then(() => product)
  //       .catch(this.handleError);
  //   }

  Delete(id: string): Promise<void> {
    const url = `${this.url}/${id}`;
    return this._http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
