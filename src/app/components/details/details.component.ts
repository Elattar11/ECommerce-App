import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule , CarouselModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  productID:string|null= "";
  productDetails:any = null;
  constructor(private _ActivatedRoute:ActivatedRoute
    , private _ProductsService:ProductsService
    , private _Renderer2:Renderer2
    , private _CartService : CartService
    , private _ToastrService : ToastrService
    ){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>
      {
        this.productID = params.get('id');
        console.log(this.productID);
      }
    });

    this._ProductsService.getProductDetails(this.productID).subscribe({
      next:({data}) =>
      {
        this.productDetails = data
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

  productDetailsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['Prev', 'Next'],
    items:1,
    nav: true
  }

}
