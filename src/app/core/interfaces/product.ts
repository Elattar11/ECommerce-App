export interface Product {

  title:string;
  category:Category;
  imageCover : string;
  ratingsAverage : number;
  price : number;
  _id:string;
}

export interface Category
{
  name : string;
}
