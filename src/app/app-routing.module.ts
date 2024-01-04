import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path:'' ,
  canActivate:[authGuard],
  loadComponent:()=> import('./layouts/blank-layout/blank-layout.component')
  .then((m)=>m.BlankLayoutComponent) ,
  children:[
    {path:'', redirectTo:'home' , pathMatch:'full'},
    {path:'home' ,
    loadComponent: ()=> import('./components/home/home.component')
    .then((m)=>m.HomeComponent) ,
    title:'home'
   },

   {path:'cart' ,
    loadComponent: ()=> import('./components/cart/cart.component')
    .then((m)=>m.CartComponent) ,
    title:'cart'
   },

   {path:'products' ,
    loadComponent: ()=> import('./components/products/products.component')
    .then((m)=>m.ProductsComponent) ,
    title:'products'
   },

   {path:'productdetails/:id' ,
    loadComponent: ()=> import('./components/details/details.component')
    .then((m)=>m.DetailsComponent) ,
    title:'product details'
   },

   {path:'brands' ,
    loadComponent: ()=> import('./components/brands/brands.component')
    .then((m)=>m.BrandsComponent) ,
    title:'brands'
   },

   {path:'brandsdetails/:id' ,
    loadComponent: ()=> import('./components/brandsdetails/brandsdetails.component')
    .then((m)=>m.BrandsdetailsComponent) ,
    title:'brands details'
   },

   {path:'categories' ,
    loadComponent: ()=> import('./components/categories/categories.component')
    .then((m)=>m.CategoriesComponent) ,
    title:'categories'
   },

   {path:'categorydetails/:id' ,
    loadComponent: ()=> import('./components/categorydetails/categorydetails.component')
    .then((m)=>m.CategorydetailsComponent) ,
    title:'category details'
   },

   {path:'payment/:id' ,
    loadComponent: ()=> import('./components/payment/payment.component')
    .then((m)=>m.PaymentComponent) ,
    title:'payment'
   },

   {path:'allorders' ,
    loadComponent: ()=> import('./components/allorders/allorders.component')
    .then((m)=>m.AllordersComponent) ,
    title:'all orders'
   },

   {path:'wishlist' ,
    loadComponent: ()=> import('./components/wishlist/wishlist.component')
    .then((m)=>m.WishlistComponent) ,
    title:'wish list'
   },



  ]
 },

 {path:'' ,
 loadComponent:()=>import('./layouts/auth-layout/auth-layout.component')
 .then((m)=>m.AuthLayoutComponent),
 children:[
  {path:'', redirectTo:'login' , pathMatch:'full'},
  {path:'login' ,
    loadComponent: ()=> import('./components/login/login.component')
    .then((m)=>m.LoginComponent) ,
    title:'login'
   },

   {path:'register' ,
    loadComponent: ()=> import('./components/register/register.component')
    .then((m)=>m.RegisterComponent) ,
    title:'register'
   },
   {path:'forgetpassword' ,
    loadComponent: ()=> import('./components/forgetpassword/forgetpassword.component')
    .then((m)=>m.ForgetpasswordComponent) ,
    title:'forget password'
   }
 ]
},

{path:'**' ,
    loadComponent: ()=> import('./components/notfound/notfound.component')
    .then((m)=>m.NotfoundComponent) ,
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
