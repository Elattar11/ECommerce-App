import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WashlistService } from 'src/app/core/services/washlist.service';
import { Product } from 'src/app/core/interfaces/product';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipes/cuttext.pipe';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule , RouterLink , CuttextPipe],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  products:Product[] = [];
  wishListData:string[] = [];
  constructor(private _WashlistService:WashlistService , private _ToastrService : ToastrService
    , private _Renderer2:Renderer2 , private _CartService:CartService  ){}
  ngOnInit(): void {

    this._WashlistService.getWishList().subscribe({
      next:(res) =>
      {
        this.products = res.data;
        const newData = res.data.map((item:any) => item._id );

        this.wishListData = newData;
      },
      error:(err) =>
      {

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

        const newProData = this.products.filter((item:any) => this.wishListData.includes(item._id));

        this.products = newProData;

        this._WashlistService.favNumber.next(this.wishListData.length);



      },
      error:(err) =>
      {

      }
    })
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

}
