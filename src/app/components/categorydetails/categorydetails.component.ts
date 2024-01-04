import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { Category } from 'src/app/core/interfaces/category';

@Component({
  selector: 'app-categorydetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.scss']
})
export class CategorydetailsComponent implements OnInit {

  categoryID : string|null = "";
  categoryDetails:Category={} as Category;
  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>
      {
        this.categoryID =  param.get('id');
      }
    });

    this._ProductsService.getCategoriesDetails(this.categoryID).subscribe({
      next:(res)=>
      {
        this.categoryDetails = res.data;
      },
      error:(err) =>
      {

      }
    })

  }

}
