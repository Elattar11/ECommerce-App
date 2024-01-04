import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  cartID:any ="";

  constructor(private _ActivatedRoute:ActivatedRoute , private _CartService:CartService){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>
      {
        this.cartID = params.get('id');
        console.log(this.cartID)
      }
    })
  }


  orderForm:FormGroup= new FormGroup(
    {
      details:new FormControl(''),
      phone:new FormControl(''),
      city:new FormControl(''),
    }
  )

  handleForm():void
  {
    this._CartService.checkout(this.cartID , this.orderForm.value).subscribe({
      next:(res) =>
      {
        if(res.status == "success")
        {
          window.open(res.session.url , '_self');
        }
      },
      error:(err) =>
      {

      }
    })
  }



}
