
import { ProductModel } from './product.model';
import {ProductService} from '../product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //constructor() { }
title:String="Product List"
//Product is the model class for a product item
products:ProductModel[];
//image properties
imageWidth:number=50;
iamgeMargin:number=2;

showImage:boolean=false;
//creating service obj for calling getProducts()
constructor(private productService: ProductService
            , private router : Router){

              this.getProducts();        
}
toggleImage():void{
  this.showImage=!this.showImage;
}

  ngOnInit(): void {
  
  }

  getProducts(){
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
  }

  deleteProduct(_id : string){
    debugger;
    if (window.confirm('Are you sure to delete product?')) {
      this.productService.deleteProduct(_id);
      this.getProducts();
      this.router.navigate(['/']) ;
    };
  }
}  

