import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartDetails : any = null;

   swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success m-2',
      cancelButton: 'btn btn-danger m-2',
    },
    buttonsStyling: false
  });

  constructor(private _CartService:CartService , private _Renderer2:Renderer2 , private _ToastrService:ToastrService){}

  ngOnInit(): void {

    this._CartService.getCartUser().subscribe({
      next : (res) =>
      {
        this.cartDetails = res.data;
      }
    });

  }

  removeItem(prodID : string , element:HTMLButtonElement ):void
  {
      this.swalWithBootstrapButtons.fire({
        title: 'Are you sure ?',
        text: "You want to delete this item !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it',
        cancelButtonText: 'No, cancel',
        reverseButtons: true
      }).then((result) => {
      if (result.isConfirmed) {

        this._Renderer2.setAttribute(element , 'disabled' , 'true');
        this._CartService.removeCartItem(prodID).subscribe({
          next : (res) =>
          {
            this.cartDetails = res.data;
            this._Renderer2.removeAttribute(element , 'disabled');
            this._CartService.cartNumber.next(res.numOfCartItems);
            // this._ToastrService.success("Removed successfully...");
            this.swalWithBootstrapButtons.fire(

              'Deleted',
              'Item deleted successfully...',
              'success'
            )
            if(res.numOfCartItems == 0)
            {
              this.cartDetails = null;
            }

          },
          error : (err) =>
          {
            this._Renderer2.removeAttribute(element , 'disabled');
          }
      })


      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        this.swalWithBootstrapButtons.fire(
          'Cancelled',
          '',
          'error'
        )
      }
    })


  }

  changeCount(count : number , prodID : string , el1 : HTMLButtonElement , el2 : HTMLButtonElement):void
  {
    if(count >= 1)
    {
      this._Renderer2.setAttribute(el1 , 'disabled' , 'true');
      this._Renderer2.setAttribute(el2 , 'disabled' , 'true');
      this._CartService.updateCartCount(prodID , count).subscribe({
        next :(res) =>
        {
          this.cartDetails = res.data;
          this._Renderer2.removeAttribute(el1 , 'disabled');
          this._Renderer2.removeAttribute(el2 , 'disabled');
        },
        error : (err) =>
        {
          this._Renderer2.removeAttribute(el1 , 'disabled');
          this._Renderer2.removeAttribute(el2 , 'disabled');
        }
      });
    }

  }

  clearCart():void
  {
    this.swalWithBootstrapButtons.fire({
      title: 'Are you sure ?',
      text: "You want to clear your cart !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Clear it',
      cancelButtonText: 'No, cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._CartService.clearCart().subscribe({
          next : (res) =>
          {
            if(res.message == "success")
            {
              this.cartDetails = null;
              this._CartService.cartNumber.next(0);
              // this._ToastrService.success("Cart cleared successfully...");
              this.swalWithBootstrapButtons.fire(

                'Cleared',
                'Cart cleared successfully...',
                'success'
              )
            }
          }
        });

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        this.swalWithBootstrapButtons.fire(
          'Cancelled',
          '',
          'error'
        )
      }
    })

  }

}
