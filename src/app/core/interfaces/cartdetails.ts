
export interface Cartdetails {
  products:Product[];
  totalCartPrice: number;
}


export interface Product {
  imageCover:string;
  title:string;
  price:number;
  count:number;
}
