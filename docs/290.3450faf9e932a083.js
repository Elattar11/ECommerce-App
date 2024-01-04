"use strict";(self.webpackChunkEcommerceApp=self.webpackChunkEcommerceApp||[]).push([[290],{5290:(f,m,i)=>{i.r(m),i.d(m,{CartComponent:()=>E});var _=i(6814),p=i(3519),l=i.n(p),C=i(1120),t=i(4769),v=i(6286),c=i(2425);function u(o,h){if(1&o){const e=t.EpF();t.TgZ(0,"div",10)(1,"div",11),t._UZ(2,"img",12),t.qZA(),t.TgZ(3,"div",13)(4,"div")(5,"h3",14),t._uU(6),t.qZA(),t.TgZ(7,"p",15),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"button",16,17),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.MAs(11),d=t.oxw(2);return t.KtG(d.removeItem(s.product._id,a))}),t._UZ(12,"i",18),t._uU(13," Remove "),t.qZA()(),t.TgZ(14,"div")(15,"button",19,20),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.MAs(16),d=t.MAs(21),b=t.oxw(2);return t.KtG(b.changeCount(s.count-1,s.product._id,a,d))}),t._uU(17,"-"),t.qZA(),t.TgZ(18,"span",21),t._uU(19),t.qZA(),t.TgZ(20,"button",19,22),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.MAs(16),d=t.MAs(21),b=t.oxw(2);return t.KtG(b.changeCount(s.count+1,s.product._id,a,d))}),t._uU(22,"+"),t.qZA()()()()}if(2&o){const e=h.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH)("alt",e.product.title),t.xp6(4),t.Oqu(e.product.title),t.xp6(2),t.hij("Price: ",t.xi3(9,5,e.price,"EGP "),""),t.xp6(11),t.Oqu(e.count)}}const x=function(o){return["/payment",o]};function g(o,h){if(1&o){const e=t.EpF();t.TgZ(0,"section",2)(1,"div",3)(2,"h1",4),t._uU(3,"Shop Cart"),t.qZA(),t.TgZ(4,"button",5),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.clearCart())}),t._uU(5,"Clear Cart"),t.qZA()(),t.TgZ(6,"p",6),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.YNc(9,u,23,8,"div",7),t.TgZ(10,"button",8),t._uU(11,"Confirm Payment "),t._UZ(12,"i",9),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(7),t.hij("Total Price: ",t.xi3(8,3,e.cartDetails.totalCartPrice,"EGP "),""),t.xp6(2),t.Q6J("ngForOf",e.cartDetails.products),t.xp6(1),t.Q6J("routerLink",t.VKq(6,x,e.cartDetails._id))}}function A(o,h){1&o&&(t.TgZ(0,"h2",23),t._uU(1,"Your cart is empty..."),t.qZA())}let E=(()=>{class o{constructor(e,r,n){this._CartService=e,this._Renderer2=r,this._ToastrService=n,this.cartDetails=null,this.swalWithBootstrapButtons=l().mixin({customClass:{confirmButton:"btn btn-success m-2",cancelButton:"btn btn-danger m-2"},buttonsStyling:!1})}ngOnInit(){this._CartService.getCartUser().subscribe({next:e=>{this.cartDetails=e.data}})}removeItem(e,r){this.swalWithBootstrapButtons.fire({title:"Are you sure ?",text:"You want to delete this item !",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it",cancelButtonText:"No, cancel",reverseButtons:!0}).then(n=>{n.isConfirmed?(this._Renderer2.setAttribute(r,"disabled","true"),this._CartService.removeCartItem(e).subscribe({next:s=>{this.cartDetails=s.data,this._Renderer2.removeAttribute(r,"disabled"),this._CartService.cartNumber.next(s.numOfCartItems),this.swalWithBootstrapButtons.fire("Deleted","Item deleted successfully...","success"),0==s.numOfCartItems&&(this.cartDetails=null)},error:s=>{this._Renderer2.removeAttribute(r,"disabled")}})):n.dismiss===l().DismissReason.cancel&&this.swalWithBootstrapButtons.fire("Cancelled","","error")})}changeCount(e,r,n,s){e>=1&&(this._Renderer2.setAttribute(n,"disabled","true"),this._Renderer2.setAttribute(s,"disabled","true"),this._CartService.updateCartCount(r,e).subscribe({next:a=>{this.cartDetails=a.data,this._Renderer2.removeAttribute(n,"disabled"),this._Renderer2.removeAttribute(s,"disabled")},error:a=>{this._Renderer2.removeAttribute(n,"disabled"),this._Renderer2.removeAttribute(s,"disabled")}}))}clearCart(){this.swalWithBootstrapButtons.fire({title:"Are you sure ?",text:"You want to clear your cart !",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Clear it",cancelButtonText:"No, cancel",reverseButtons:!0}).then(e=>{e.isConfirmed?this._CartService.clearCart().subscribe({next:r=>{"success"==r.message&&(this.cartDetails=null,this._CartService.cartNumber.next(0),this.swalWithBootstrapButtons.fire("Cleared","Cart cleared successfully...","success"))}}):e.dismiss===l().DismissReason.cancel&&this.swalWithBootstrapButtons.fire("Cancelled","","error")})}static#t=this.\u0275fac=function(r){return new(r||o)(t.Y36(v.N),t.Y36(t.Qsj),t.Y36(c._W))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","w-75 mx-auto shadow rounded p-3 mb-3",4,"ngIf","ngIfElse"],["msg",""],[1,"w-75","mx-auto","shadow","rounded","p-3","mb-3"],[1,"d-flex","align-items-center","justify-content-between"],[1,"h2"],[1,"btn","btn-sm","btn-outline-danger","w-25",3,"click"],[1,"text-main"],["class","row border-bottom py-2",4,"ngFor","ngForOf"],[1,"main-btn","mt-3",3,"routerLink"],[1,"fa-brands","fa-cc-visa"],[1,"row","border-bottom","py-2"],[1,"col-md-1"],[1,"w-100",3,"src","alt"],[1,"col-md-11","d-flex","justify-content-between","align-items-center"],[1,"h6"],[1,"text-main","small"],[1,"btn","btn-danger","p-0","px-2",3,"click"],["btnRemove",""],[1,"fas","fa-trash-can"],[1,"btn","btn-sm","border-success",3,"click"],["btnMinus",""],[1,"mx-2"],["btnPlus",""],[1,"text-center","text-danger","fw-bold"]],template:function(r,n){if(1&r&&(t.YNc(0,g,13,8,"section",0),t.YNc(1,A,2,0,"ng-template",null,1,t.W1O)),2&r){const s=t.MAs(2);t.Q6J("ngIf",n.cartDetails)("ngIfElse",s)}},dependencies:[_.ez,_.sg,_.O5,_.H9,C.rH]})}return o})()},6286:(f,m,i)=>{i.d(m,{N:()=>C});var _=i(5619),p=i(4769),l=i(9862);let C=(()=>{class t{constructor(c){this._HttpClient=c,this.baseURL="https://ecommerce.routemisr.com",this.cartNumber=new _.X(0)}addToCart(c){return this._HttpClient.post(this.baseURL+"/api/v1/cart",{productId:c})}getCartUser(){return this._HttpClient.get(this.baseURL+"/api/v1/cart")}removeCartItem(c){return this._HttpClient.delete(this.baseURL+`/api/v1/cart/${c}`)}updateCartCount(c,u){return this._HttpClient.put(this.baseURL+`/api/v1/cart/${c}`,{count:u})}clearCart(){return this._HttpClient.delete(this.baseURL+"/api/v1/cart")}checkout(c,u){return this._HttpClient.post(this.baseURL+`/api/v1/orders/checkout-session/${c}?url=http://localhost:4200`,{shippingAddress:u})}static#t=this.\u0275fac=function(u){return new(u||t)(p.LFG(l.eN))};static#e=this.\u0275prov=p.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()}}]);