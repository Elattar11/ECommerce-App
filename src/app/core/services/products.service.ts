import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseURL : string = "https://ecommerce.routemisr.com";

  constructor(private _HttpClient:HttpClient) { }

  getProducts(pageNum:number = 1):Observable<any>
  {
    return this._HttpClient.get(this.baseURL + `/api/v1/products?page=${pageNum}`);
  }

  getCategories(pageNum:number = 1):Observable<any>
  {
    return this._HttpClient.get(this.baseURL + `/api/v1/categories?page=${pageNum}`);
  }

  getCategoriesDetails(categoryID:string|null):Observable<any>
  {
    return this._HttpClient.get(this.baseURL + `/api/v1/categories/${categoryID}`);
  }

  getProductDetails(id:string|null):Observable<any>
  {
    return this._HttpClient.get(this.baseURL + `/api/v1/products/${id}`);
  }

  getBrands(pageNum:number = 1):Observable<any>
  {
    return this._HttpClient.get(this.baseURL + `/api/v1/brands?page=${pageNum}`);
  }

  getBrandsDetails(brandID:string|null):Observable<any>
  {
    return this._HttpClient.get(this.baseURL + `/api/v1/brands/${brandID}`);
  }
}
