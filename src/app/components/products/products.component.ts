import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/core/interfaces/product';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipes/cuttext.pipe';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from 'src/app/core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { WashlistService } from 'src/app/core/services/washlist.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , RouterLink ,CuttextPipe , NgxPaginationModule , SearchPipe ,FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  term:string = '';
  products:Product[] = [];
  pageSize:number = 0;
  currentPage:number = 1;
  total:number = 0;
  wishListData:string[] = [];
  constructor(private _ProductsService:ProductsService , private _Renderer2:Renderer2
    ,private _CartService : CartService , private _ToastrService : ToastrService , private _WashlistService : WashlistService  ){}
  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next:(res) =>
      {
        this.products = res.data;
        this.pageSize = res.metadata.limit;
        this.currentPage = res.metadata.currentPage;
        this.total = res.results;
      },
      error:(err) =>
      {

      }
    });

    this._WashlistService.getWishList().subscribe({
      next:(res) =>
      {
        const newData = res.data.map((item:any) => item._id );

        this.wishListData = newData;
      },
      error:(err) =>
      {

      }
    });
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

  pageChanged(event:any):void
  {
    this._ProductsService.getProducts(event).subscribe({
      next:(res) =>
      {
        this.products = res.data;
        this.pageSize = res.metadata.limit;
        this.currentPage = res.metadata.currentPage;
        this.total = res.results;
      },
      error:(err) =>
      {

      }
    });
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
