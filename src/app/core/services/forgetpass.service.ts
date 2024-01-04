import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpassService {
  baseURL : string = "https://ecommerce.routemisr.com";
  constructor(private _HttpClient:HttpClient) { }

  forgetPassword(userEmail:object):Observable<any>
  {
    return this._HttpClient.post(this.baseURL+`/api/v1/auth/forgotPasswords` , userEmail);
  }

  resetCode(resetCode:object):Observable<any>
  {
    return this._HttpClient.post(this.baseURL+`/api/v1/auth/verifyResetCode` , resetCode);
  }

  resetPassword(resetPasswordForm:object):Observable<any>
  {
    return this._HttpClient.put(this.baseURL+`/api/v1/auth/resetPassword` , resetPasswordForm );
  }
}
