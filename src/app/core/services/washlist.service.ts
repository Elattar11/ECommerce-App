import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WashlistService {
  baseURL : string = "https://ecommerce.routemisr.com";

  favNumber : BehaviorSubject<number> = new BehaviorSubject(0);
  constructor(private _HttpClient:HttpClient) { }

  addToWishList(prodID:string):Observable<any>
  {
    return this._HttpClient.post(this.baseURL+'/api/v1/wishlist' ,
    {productId: prodID}
    );
  }

  getWishList():Observable<any>
  {
    return this._HttpClient.get(this.baseURL + '/api/v1/wishlist');
  }

  removeFromWishList(prodID:string):Observable<any>
  {
    return this._HttpClient.delete(this.baseURL + `/api/v1/wishlist/${prodID}`);
  }
}
