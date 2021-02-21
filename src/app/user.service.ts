import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProduct, IUser} from './models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
  private usersUrl = 'https://fakestoreapi.com/users';

  getProducts(): Observable<IUser[]> {
    return this._http.get<IUser[]>(this.usersUrl);
  }
}
