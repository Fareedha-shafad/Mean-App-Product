export class ProductModel{
    constructor(
       public  productId:number,
       public productName:string,
       public productCode:string,
       public releaseDate:string,
       public discription:string,
       public  price:number,
      public starRating:number,
      public ImageUrl:string
    ){}
}