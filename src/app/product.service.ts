import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IProduct} from './models/interfaces';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }
  private productsUrl = 'https://fakestoreapi.com/products';

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.productsUrl);
  }
}
