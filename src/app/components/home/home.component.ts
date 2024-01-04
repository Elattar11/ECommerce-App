import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/core/interfaces/product';
import {Category} from 'src/app/core/interfaces/category';
import { CuttextPipe } from 'src/app/core/pipes/cuttext.pipe';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WashlistService } from 'src/app/core/services/washlist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , CuttextPipe , CarouselModule , RouterLink ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products:Product[] = [];
  categories: Category[] = [];
  wishListData:string[] = [];
  constructor(
    private _ProductsService:ProductsService
    , private _CartService:CartService
    , private _ToastrService: ToastrService
    ,private _Renderer2:Renderer2
    ,private _WashlistService:WashlistService){}

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next:(res) =>
      {
        this.products = res.data;


      },
      error:(err) =>
      {
        console.log(err);
      }
    });

    this._ProductsService.getCategories().subscribe({
      next:(res) =>
      {
        this.categories = res.data;
      },
      error:(err) =>
      {
        this._ToastrService.error(err.message);
      }
    })

    this._WashlistService.getWishList().subscribe({
      next:(res) =>
      {
        const newData = res.data.map((item:any) => item._id );

        this.wishListData = newData;
      },
      error:(err) =>
      {

      }
    })

  }

  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplaySpeed:1000,
    autoplayTimeout: 3000,
    navText: ['Prev', 'Next'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  };

  mainSlideOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:2000,
    autoplaySpeed: 1000,
    navText: ['Prev', 'Next'],
    items:1,
    nav: false
  }

  addToCart(id:string , element:HTMLButtonElement):void
  {
    this._Renderer2.setAttribute(element , 'disabled' , 'true');

    this._CartService.addToCart(id).subscribe({
      next:(res) =>
      {
        this._ToastrService.success(res.message);
        this._Renderer2.removeAttribute(element, 'disabled');
        this._CartService.cartNumber.next(res.numOfCartItems);

      },
      error:(err) =>
      {
        this._Renderer2.removeAttribute(element, 'disabled');
      }

    })
  }

  addFav(prodID:string):void
  {
    this._WashlistService.addToWishList(prodID).subscribe({
      next:(res) =>
      {

        this._ToastrService.success(res.message);
        this.wishListData = res.data;
        this._WashlistService.favNumber.next(this.wishListData.length);

        console.log(res);
      },
      error:(err) =>
      {

      }
    })
  }

  removeFav(prodID:string):void
  {
    this._WashlistService.removeFromWishList(prodID).subscribe({
      next:(res) =>
      {
        this._ToastrService.success(res.message);
        this.wishListData = res.data;
        this._WashlistService.favNumber.next(this.wishListData.length);

        console.log(res);
      },
      error:(err) =>
      {

      }
    })
  }







}



