import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL : string = "https://ecommerce.routemisr.com";

  userInfo : any;

  constructor(private _HttpClient:HttpClient) { }

  register(userData:object):Observable<any>
  {
    return this._HttpClient.post(`${this.baseURL}/api/v1/auth/signup`,userData)
  }

  login(userData:object):Observable<any>
  {
    return this._HttpClient.post(`${this.baseURL}/api/v1/auth/signin`,userData)
  }


  decodedUser():void
  {
    const encode = localStorage.getItem('userToken');
    if(encode != null)
    {
      const decode = jwtDecode(encode);
      this.userInfo = decode;
    }
  }

}
