import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { WashlistService } from 'src/app/core/services/washlist.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule , RouterLink , RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit {

  @ViewChild('navBar') navElement! : ElementRef;

  @HostListener('window:scroll')
  onScroll():void
  {
    if(scrollY > 1)
    {
      this._Renderer2.addClass(this.navElement.nativeElement , 'px-5');

      this._Renderer2.addClass(this.navElement.nativeElement , 'py-2');

      this._Renderer2.addClass(this.navElement.nativeElement , 'bg-light');
      this._Renderer2.removeClass(this.navElement.nativeElement , 'bg-white');

      this._Renderer2.addClass(this.navElement.nativeElement , 'shadow');
    }
    else
    {
      this._Renderer2.removeClass(this.navElement.nativeElement , 'px-5');

      this._Renderer2.removeClass(this.navElement.nativeElement , 'py-2');

      this._Renderer2.removeClass(this.navElement.nativeElement , 'bg-light');
      this._Renderer2.addClass(this.navElement.nativeElement , 'bg-white');
      this._Renderer2.removeClass(this.navElement.nativeElement , 'shadow');
    }
  }

  constructor(private _Router:Router, private _CartService:CartService , private _Renderer2:Renderer2 , private _WashlistService:WashlistService){}

  cartNum:number = 0;
  favNum:number = 0;

  ngOnInit(): void {
    this._CartService.cartNumber.subscribe({
      next:(data)=>{
        this.cartNum = data;
      }
    });

    this._CartService.getCartUser().subscribe({
      next:(res) => {
        this.cartNum = res.numOfCartItems;
      }
    });

    this._WashlistService.favNumber.subscribe({
      next:(data) =>
      {
        this.favNum = data;
      }
    });

    this._WashlistService.getWishList().subscribe({
      next:(res) => {
        this.favNum = res.count;
      }
    });
  }

  signOut():void
  {
    localStorage.removeItem('userToken');
    this._Router.navigate(['/login']);
  }

}
