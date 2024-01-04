"use strict";(self.webpackChunkEcommerceApp=self.webpackChunkEcommerceApp||[]).push([[177],{5177:(l,c,o)=>{o.r(c),o.d(c,{PaymentComponent:()=>p});var u=o(6814),r=o(95),t=o(4769),m=o(1120),s=o(6286);let p=(()=>{class e{constructor(n,a){this._ActivatedRoute=n,this._CartService=a,this.cartID="",this.orderForm=new r.cw({details:new r.NI(""),phone:new r.NI(""),city:new r.NI("")})}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:n=>{this.cartID=n.get("id"),console.log(this.cartID)}})}handleForm(){this._CartService.checkout(this.cartID,this.orderForm.value).subscribe({next:n=>{"success"==n.status&&window.open(n.session.url,"_self")},error:n=>{}})}static#t=this.\u0275fac=function(a){return new(a||e)(t.Y36(m.gz),t.Y36(s.N))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-payment"]],standalone:!0,features:[t.jDz],decls:18,vars:1,consts:[[1,"w-75","mx-auto","rounded","shadow","p-3","mb-3"],[3,"formGroup","ngSubmit"],[1,"form-item"],["for","details"],["type","text","id","details","formControlName","details",1,"form-control"],["for","phone"],["type","tel","id","phone","formControlName","phone",1,"form-control"],["for","city"],["type","text","id","city","formControlName","city",1,"form-control"],[1,"main-btn","mt-2"]],template:function(a,_){1&a&&(t.TgZ(0,"section",0)(1,"h1"),t._uU(2,"Checkout"),t.qZA(),t.TgZ(3,"form",1),t.NdJ("ngSubmit",function(){return _.handleForm()}),t.TgZ(4,"div",2)(5,"label",3),t._uU(6,"details"),t.qZA(),t._UZ(7,"input",4),t.qZA(),t.TgZ(8,"div",2)(9,"label",5),t._uU(10,"phone"),t.qZA(),t._UZ(11,"input",6),t.qZA(),t.TgZ(12,"div",2)(13,"label",7),t._uU(14,"city"),t.qZA(),t._UZ(15,"input",8),t.qZA(),t.TgZ(16,"button",9),t._uU(17,"Checkout"),t.qZA()()()),2&a&&(t.xp6(3),t.Q6J("formGroup",_.orderForm))},dependencies:[u.ez,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]})}return e})()},6286:(l,c,o)=>{o.d(c,{N:()=>m});var u=o(5619),r=o(4769),t=o(9862);let m=(()=>{class s{constructor(e){this._HttpClient=e,this.baseURL="https://ecommerce.routemisr.com",this.cartNumber=new u.X(0)}addToCart(e){return this._HttpClient.post(this.baseURL+"/api/v1/cart",{productId:e})}getCartUser(){return this._HttpClient.get(this.baseURL+"/api/v1/cart")}removeCartItem(e){return this._HttpClient.delete(this.baseURL+`/api/v1/cart/${e}`)}updateCartCount(e,i){return this._HttpClient.put(this.baseURL+`/api/v1/cart/${e}`,{count:i})}clearCart(){return this._HttpClient.delete(this.baseURL+"/api/v1/cart")}checkout(e,i){return this._HttpClient.post(this.baseURL+`/api/v1/orders/checkout-session/${e}?url=http://localhost:4200`,{shippingAddress:i})}static#t=this.\u0275fac=function(i){return new(i||s)(r.LFG(t.eN))};static#e=this.\u0275prov=r.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()}}]);