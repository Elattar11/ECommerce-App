import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseURL : string = "https://ecommerce.routemisr.com";

  cartNumber : BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private _HttpClient:HttpClient) { }

  addToCart(prodID:string):Observable<any>
  {
    return this._HttpClient.post(this.baseURL+'/api/v1/cart' ,
      {productId: prodID}


    )
  }

  getCartUser():Observable<any>
  {
    return this._HttpClient.get(this.baseURL+'/api/v1/cart'

    );
  }

  removeCartItem(prodID : string):Observable<any>
  {
    return this._HttpClient.delete(this.baseURL+`/api/v1/cart/${prodID}`

    );
  }

  updateCartCount(prodID : string , prodCount : number):Observable<any>
  {
    return this._HttpClient.put(this.baseURL + `/api/v1/cart/${prodID}`,
      {
        count: prodCount
      }

    )
  }

  clearCart():Observable<any>
  {
    return this._HttpClient.delete(this.baseURL+`/api/v1/cart`

    );
  }

  checkout(cartID:string , orderInfo:object):Observable<any>
  {
    return this._HttpClient.post(this.baseURL +
      `/api/v1/orders/checkout-session/${cartID}?url=http://localhost:4200` ,
        {
          shippingAddress:orderInfo
        }

      )
  }


}
