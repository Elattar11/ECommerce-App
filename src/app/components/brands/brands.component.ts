import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Brands } from 'src/app/core/interfaces/brands';
import { ProductsService } from 'src/app/core/services/products.service';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule , RouterLink , NgxPaginationModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brandsData:Brands[]=[];
  pageSize:number = 0;
  currentPage:number = 1;
  total:number = 0;
  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void {
    this._ProductsService.getBrands().subscribe({
      next:(res) =>
      {
        this.brandsData = res.data;
        this.pageSize = res.metadata.limit;
        this.currentPage = res.metadata.currentPage;
        this.total = res.results;
      },
      error:(err) =>
      {

      }
    })
  }


  pageChanged(event:any):void
  {
    this._ProductsService.getBrands(event).subscribe({
      next:(res) =>
      {
        this.brandsData = res.data;
        this.pageSize = res.metadata.limit;
        this.currentPage = res.metadata.currentPage;
        this.total = res.results;
      },
      error:(err) =>
      {

      }
    });
  }

}
