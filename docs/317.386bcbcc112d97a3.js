"use strict";(self.webpackChunkEcommerceApp=self.webpackChunkEcommerceApp||[]).push([[317],{6317:(l,c,a)=>{a.r(c),a.d(c,{BrandsdetailsComponent:()=>e});var o=a(6814),t=a(4769),d=a(1120),r=a(1132);function _(n,p){if(1&n&&(t.TgZ(0,"section",1)(1,"div",2)(2,"div",3),t._UZ(3,"img",4),t.qZA(),t.TgZ(4,"div",3)(5,"h2"),t._uU(6),t.qZA()()()()),2&n){const s=t.oxw();t.xp6(3),t.Q6J("src",s.brandsDetails.image,t.LSH)("alt",s.brandsDetails.name),t.xp6(3),t.Oqu(s.brandsDetails.name)}}let e=(()=>{class n{constructor(s,i){this._ActivatedRoute=s,this._ProductsService=i,this.brandID="",this.brandsDetails={}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:s=>{this.brandID=s.get("id")}}),this._ProductsService.getBrandsDetails(this.brandID).subscribe({next:s=>{this.brandsDetails=s.data},error:s=>{}})}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(d.gz),t.Y36(r.s))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-brandsdetails"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","w-75 mx-auto rounded shadow p-3 my-3",4,"ngIf"],[1,"w-75","mx-auto","rounded","shadow","p-3","my-3"],[1,"row","g-4","align-items-center"],[1,"col-md-6"],[1,"w-100",3,"src","alt"]],template:function(i,u){1&i&&t.YNc(0,_,7,3,"section",0),2&i&&t.Q6J("ngIf",u.brandsDetails._id)},dependencies:[o.ez,o.O5]})}return n})()},1132:(l,c,a)=>{a.d(c,{s:()=>d});var o=a(4769),t=a(9862);let d=(()=>{class r{constructor(e){this._HttpClient=e,this.baseURL="https://ecommerce.routemisr.com"}getProducts(e=1){return this._HttpClient.get(this.baseURL+`/api/v1/products?page=${e}`)}getCategories(e=1){return this._HttpClient.get(this.baseURL+`/api/v1/categories?page=${e}`)}getCategoriesDetails(e){return this._HttpClient.get(this.baseURL+`/api/v1/categories/${e}`)}getProductDetails(e){return this._HttpClient.get(this.baseURL+`/api/v1/products/${e}`)}getBrands(e=1){return this._HttpClient.get(this.baseURL+`/api/v1/brands?page=${e}`)}getBrandsDetails(e){return this._HttpClient.get(this.baseURL+`/api/v1/brands/${e}`)}static#t=this.\u0275fac=function(n){return new(n||r)(o.LFG(t.eN))};static#e=this.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()}}]);