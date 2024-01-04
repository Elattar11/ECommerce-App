import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { Category } from 'src/app/core/interfaces/category';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule , RouterLink , NgxPaginationModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

  categoryData:Category[]=[];
  pageSize:number = 0;
  currentPage:number = 1;
  total:number = 0;

  constructor(private _ProductsService:ProductsService){}
  ngOnInit(): void {
    this._ProductsService.getCategories().subscribe({
      next:(res)=>{
        this.categoryData = res.data;
        this.pageSize = res.metadata.limit;
        this.currentPage = res.metadata.currentPage;
        this.total = res.results;
      }
    })
  }

  pageChanged(event:any):void
  {
    this._ProductsService.getCategories(event).subscribe({
      next:(res) =>
      {
        this.categoryData = res.data;
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
