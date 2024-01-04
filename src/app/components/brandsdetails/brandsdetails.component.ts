import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Brands } from 'src/app/core/interfaces/brands';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-brandsdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brandsdetails.component.html',
  styleUrls: ['./brandsdetails.component.scss']
})
export class BrandsdetailsComponent implements OnInit {

  brandID : string|null = "";
  brandsDetails:Brands={} as Brands;
  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService){}
  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>
      {
        this.brandID =  param.get('id');
      }
    });

    this._ProductsService.getBrandsDetails(this.brandID).subscribe({
      next:(res)=>
      {
        this.brandsDetails = res.data;
      },
      error:(err) =>
      {

      }
    })

  }


}
